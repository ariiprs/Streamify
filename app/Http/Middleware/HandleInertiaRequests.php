<?php

namespace App\Http\Middleware;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }


    private function activePlan()
    {
        $activePlan = Auth::user() ? Auth::user()->lastActiveUserSubscription : null;

        if (!$activePlan) {
            return null;
        }

        //Carbon penting untuk menghitung yang berhubungan dengan waktu
        $lastDay = Carbon::parse($activePlan->updated_at)->addMonths($activePlan->subscriptionPlan->active_period_in_months); //ini untuk cek sisa berapa bulan
        $activeDays = Carbon::parse($activePlan->updated_at)->diffInDays($lastDay); //ini untuk cek sisa berapa hari dengan cara convert $lastDay ke hari


        // $remainingActiveDays = Carbon::parse($activePlan->expired_date)->diffInDays(Carbon::now()); ini untuk cek sisa berapa hari dengan cara convert expired_date ke hari

        $expiredDate = new \DateTime($activePlan->expired_date);
        $now = new \DateTime();

        $interval = $expiredDate->diff($now);
        $remainingActiveDays = $interval->days * ($interval->invert ? 1 : 1);


        return [
            'name' => $activePlan->subscriptionPlan->name,
            'remainingActiveDays' =>round($remainingActiveDays),
            'activeDays' => $activeDays,
        ];
    }


    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $user = $request->user();
        $activePlan = $this->activePlan();

        return [
            ...parent::share($request),
            'auth' => [
                'user' => $user ? array_merge($user->toArray(), [
                    'activePlan' => $activePlan,
                ]) : null,
            ],
            'flashMessage' => [
                'message' => Session::get('message'),
                'type' => Session::get('type'),
            ],
        ];
    }
}
