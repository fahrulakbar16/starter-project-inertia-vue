<?php

namespace App\Actions\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginAction
{
    /**
     * Attempt to login user.
     */
    public function execute(Request $request): array
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
                return [
                    'success' => false,
                    'message' => 'Akun Anda tidak aktif. Silakan hubungi administrator.',
                ];
            }

            if ($user->status === 'pending') {
                Auth::logout();
                return [
                    'success' => false,
                    'message' => 'Akun Anda masih menunggu verifikasi. Silakan hubungi administrator.',
                ];
            }

            $request->session()->regenerate();

            return [
                'success' => true,
                'message' => 'Login berhasil',
            ];
        }

        return [
            'success' => false,
            'message' => 'Username atau Password salah',
        ];
    }
}

