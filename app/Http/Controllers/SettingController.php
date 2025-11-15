<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class SettingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        abort_unless(Gate::allows('settings.view'), 403, 'Anda tidak memiliki akses untuk melihat pengaturan');

        // Get or create default settings
        $this->ensureDefaultSettings();

        $settings = Setting::orderBy('group')->orderBy('key')->get()->groupBy('group');

        return Inertia::render('Admin/Settings/Index', [
            'settings' => $settings,
        ]);
    }

    /**
     * Update multiple settings at once
     */
    public function updateMultiple(Request $request)
    {
        abort_unless(Gate::allows('settings.edit'), 403, 'Anda tidak memiliki akses untuk mengubah pengaturan');

        $settingsData = $request->input('settings', []);

        foreach ($settingsData as $index => $settingData) {
            $key = $settingData['key'] ?? null;
            if (!$key) continue;

            $setting = Setting::where('key', $key)->first();
            
            if (!$setting) {
                // Determine type and group based on key
                $type = str_starts_with($key, 'logo_') ? 'image' : 'text';
                $group = str_starts_with($key, 'logo_') ? 'logo' : (str_starts_with($key, 'contact_') ? 'contact' : 'general');
                
                $setting = Setting::create([
                    'key' => $key,
                    'type' => $type,
                    'group' => $group,
                ]);
            }

            $value = null;

            // Handle image upload
            if ($setting->type === 'image') {
                // Check if it's a file upload
                if ($request->hasFile("settings.{$index}.value")) {
                    $file = $request->file("settings.{$index}.value");
                    
                    // Delete old image if exists
                    if ($setting->value) {
                        Storage::disk('public')->delete($setting->value);
                    }

                    $path = $file->store('settings', 'public');
                    $value = $path;
                } else {
                    // Check if it's an existing path (from database)
                    $inputValue = $settingData['value'] ?? null;
                    if ($inputValue && (str_starts_with($inputValue, 'settings/') || str_starts_with($inputValue, '/storage/settings/'))) {
                        // Keep the existing path
                        $value = str_replace('/storage/', '', $inputValue);
                    } else {
                        // Keep existing value if no new file uploaded and no valid path provided
                        $value = $setting->value;
                    }
                }
            } else {
                // Text field
                $value = $settingData['value'] ?? $setting->value;
            }

            $setting->update(['value' => $value]);
        }

        // Reload settings to ensure fresh data
        return redirect()->route('settings.index')->with('success', 'Pengaturan berhasil diperbarui');
    }

    /**
     * Ensure default settings exist
     */
    private function ensureDefaultSettings()
    {
        $defaultSettings = [
            [
                'key' => 'logo_main',
                'value' => null,
                'type' => 'image',
                'group' => 'logo',
                'description' => 'Logo utama website',
            ],
            [
                'key' => 'logo_favicon',
                'value' => null,
                'type' => 'image',
                'group' => 'logo',
                'description' => 'Favicon website',
            ],
            [
                'key' => 'site_name',
                'value' => 'Henskristal',
                'type' => 'text',
                'group' => 'general',
                'description' => 'Nama website',
            ],
            [
                'key' => 'site_description',
                'value' => '',
                'type' => 'text',
                'group' => 'general',
                'description' => 'Deskripsi website',
            ],
            [
                'key' => 'contact_email',
                'value' => '',
                'type' => 'text',
                'group' => 'contact',
                'description' => 'Email kontak',
            ],
            [
                'key' => 'contact_phone',
                'value' => '',
                'type' => 'text',
                'group' => 'contact',
                'description' => 'Nomor telepon kontak',
            ],
            [
                'key' => 'contact_address',
                'value' => '',
                'type' => 'text',
                'group' => 'contact',
                'description' => 'Alamat kontak',
            ],
        ];

        foreach ($defaultSettings as $default) {
            Setting::firstOrCreate(
                ['key' => $default['key']],
                $default
            );
        }
    }
}
