<?php

namespace App\Http\Controllers;

use App\Setting;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
    /**
     * Fetches all settings
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sorted = Setting::all()->sortBy('name');

        return $sorted->values()->all();
    }

    /**
     * Fetches a specific setting by id
     *
     * @param Setting $setting
     * @return \Illuminate\Http\Response
     */
    public function get(Setting $setting)
    {
        return $setting;
    }

    /**
     * Store a newly created setting in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $setting = new Setting();
        $setting->name = $request->name;
        $success = $setting->save();

        return response()->json([
            'success' => $success
        ]);
    }

    /**
     * Update the specified setting in storage
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Setting $setting
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Setting $setting)
    {
        $setting->name = $request->name;
        $success = $setting->save();

        return response()->json([
            'success' => $success
        ]);
    }

    /**
     * Remove the specified setting from storage
     *
     * @param  \App\Setting $setting
     * @return \Illuminate\Http\Response
     */
    public function destroy(Setting $setting)
    {
        $success = $setting->delete();

        return response()->json([
            'success' => $success
        ]);
    }
}
