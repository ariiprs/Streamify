<?php

namespace Database\Seeders;

use App\Models\SubscriptionPlan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subscriptionPlans = [
            [
                'name' => 'Basic',
                'price' => 100000,
                'active_period_in_months' => 3,
                'features' => json_encode(['Feature 1', 'Feature 2']),
            ],
            [
                'name' => 'Premium',
                'price' => 900000,
                'active_period_in_months' => 6,
                'features' => json_encode(['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']),
            ],
        ];

        SubscriptionPlan::insert($subscriptionPlans);
    }
}
