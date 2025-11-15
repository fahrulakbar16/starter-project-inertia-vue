<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Role;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        try {
            // Dashboard metrics
            $metrics = [
                'total_users' => User::count(),
                'active_users' => User::where('status', 'active')->count(),
                'total_roles' => Role::count(),
                'users_with_roles' => User::whereHas('roles')->count(),
            ];

            return Inertia::render('Admin/Dashboard', [
                'metrics' => $metrics,
            ]);
        } catch (\Exception $e) {
            // Fallback data in case of errors
            return Inertia::render('Admin/Dashboard', [
                'metrics' => [
                    'total_users' => 0,
                    'active_users' => 0,
                    'total_roles' => 0,
                    'users_with_roles' => 0,
                ],
            ]);
        }
    }
}
