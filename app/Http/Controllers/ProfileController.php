<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{
    public function showDetail()
    {
        $user = Auth::user();

        return Inertia::render('Profile/Show', [
            // Props expected by Profile/Show.vue
            'confirmsTwoFactorAuthentication' => false,
            'sessions' => [],
        ]);
    }



    public function edit(Request $request)
    {
        return Inertia::render('Profile/Edit', [
            'user' => $request->user(),
        ]);
    }

    public function apiShow(Request $request)
    {
        return response()->json([
            'success' => true,
            'data' => $request->user(),
        ]);
    }
}
