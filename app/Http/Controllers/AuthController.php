<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{
    public function login()
    {

        return Inertia::render('Admin/Auth/Login');
    }

    public function auth(Request $request)
    {
        $userField = filter_var($request->input('user'), FILTER_VALIDATE_EMAIL) ? 'email' : 'username';

        $credentials = [
            $userField => $request->input('user'),
            'password' => $request->input('password')
        ];

        $remember = $request->boolean('remember');

        if (Auth::attempt($credentials, $remember)) {
            $user = Auth::user();

            // Check if user status is active
            if ($user->status === 'inactive') {
                Auth::logout();
                return redirect()->back()->with('error', 'Akun Anda tidak aktif. Silakan hubungi administrator.');
            }

            if ($user->status === 'pending') {
                Auth::logout();
                return redirect()->back()->with('error', 'Akun Anda masih menunggu verifikasi. Silakan hubungi administrator.');
            }

            $request->session()->regenerate();
            return redirect()->intended('/dashboard')->with('success', 'Login berhasil');
        }

        return redirect()->back()->with('error', 'Username atau Password salah');
    }

    public function logout(Request $request)
    {
        Auth::guard('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect()->route('login');
    }

}
