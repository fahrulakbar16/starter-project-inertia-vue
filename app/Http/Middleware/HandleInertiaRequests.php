<?php

namespace App\Http\Middleware;

use Inertia\Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Setting;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        // Get website settings
        $logoMain = Setting::get('logo_main');
        $logoFavicon = Setting::get('logo_favicon');

        $settings = [
            'logo_main' => $logoMain,
            'logo_favicon' => $logoFavicon,
            'site_name' => Setting::get('site_name', 'Henskristal'),
            'site_description' => Setting::get('site_description', 'Ice Solution'),
            'contact_email' => Setting::get('contact_email'),
            'contact_phone' => Setting::get('contact_phone'),
            'contact_address' => Setting::get('contact_address'),
        ];

        // Format logo URLs
        if ($logoMain && is_string($logoMain)) {
            $settings['logo_main_url'] = str_starts_with($logoMain, 'http')
                ? $logoMain
                : asset('storage/' . $logoMain);
        } else {
            $settings['logo_main_url'] = '/images/logo/henskristal.png';
        }

        if ($logoFavicon && is_string($logoFavicon)) {
            $settings['logo_favicon_url'] = str_starts_with($logoFavicon, 'http')
                ? $logoFavicon
                : asset('storage/' . $logoFavicon);
        } else {
            $settings['logo_favicon_url'] = '/images/logo/henskristal.png';
        }

        return array_merge(parent::share($request), [
            'auth' => [
                'user' => Auth::user(),
                'roles' => Auth::check() ? Auth::user()->getRoleNames() : [],
                'permissions' => Auth::check() ? Auth::user()->getAllPermissions()->pluck('name') : [],
            ],
            'flash' => [
                'success' => fn() => $request->session()->get('success'),
                'error'   => fn() => $request->session()->get('error'),
                'duplicates' => fn() => $request->session()->get('duplicates'),
            ],
            'errors' => fn() => $request->session()->get('errors')
                ? $request->session()->get('errors')->toArray()
                : (object)[],
            'settings' => $settings,
        ]);
    }
}
