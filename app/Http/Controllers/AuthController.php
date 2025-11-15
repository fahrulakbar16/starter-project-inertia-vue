<?php

namespace App\Http\Controllers;

use App\Actions\Auth\LoginAction;
use App\Actions\Auth\LogoutAction;
use App\Http\Requests\Auth\LoginRequest;
use Inertia\Inertia;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login()
    {
        return Inertia::render('Admin/Auth/Login');
    }

    public function auth(LoginRequest $request)
    {
        $result = app(LoginAction::class)->execute($request);

        if ($result['success']) {
            return redirect()->intended('/dashboard')->with('success', $result['message']);
        }

        return redirect()->back()->with('error', $result['message']);
    }

    public function logout(Request $request)
    {
        app(LogoutAction::class)->execute($request);

        return redirect()->route('login');
    }
}
