<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\SettingController;

Route::get('/', function () {
    return redirect()->route('login');
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
])->group(function () {

    Route::get('/profile', [ProfileController::class, 'showDetail'])
        ->name('profile.show');
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::resource('/roles', RoleController::class);
    Route::get('/roles/{role}/stats', [RoleController::class, 'stats'])->name('roles.stats');
    Route::resource('/users', UserController::class);
    Route::resource('/settings', SettingController::class)->only(['index', 'update']);
    Route::post('/settings/update-multiple', [SettingController::class, 'updateMultiple'])->name('settings.update-multiple');

    // Web logout for Inertia (used by router.post(route('logout')))
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
});

Route::middleware('guest')->group(function () {
    Route::get('/login', [AuthController::class, 'login'])->name('login');
    Route::post('/login', [AuthController::class, 'auth'])->name('auth');
});
