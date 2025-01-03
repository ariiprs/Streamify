<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CheckUserSubscription
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, $status): Response
    {
        if ($status === 'true' && !Auth::user()->isActive) {
            return redirect(route('user.dashboard.subscriptionPlan.index'));
        }
        /* ini kalo  CheckUserSubscription true maka akan eksekusi di atas, karena berarti dia tidak ada langganan yang active. dan ketika klik akan di redirect ke halaman payment*/

        if ($status === 'false' && Auth::user()->isActive) {
            return redirect(route('user.dashboard.index'));
        }
        /* tapi kalo CheckUserSubscriptionnnya false, itu berarti dia memiliki langganan yang aktiv dan ketika klik detail movie ya pasti bisa, karna middleware itu berlaku hanya untuk CheckUserSubscription yang true. begitu pula yg dipasang middleware yang lain */

        return $next($request);
    }
}
