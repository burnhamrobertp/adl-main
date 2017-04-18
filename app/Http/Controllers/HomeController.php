<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;

class HomeController
{
    public function index(Request $request)
    {
        $out = [
            'contributorTypes' => \App\Models\Data\ContributorType::all()->sortBy('name')->values()->toJson(),
            'creatureTypes' => \App\Models\Data\CreatureType::all()->sortBy('name')->values()->toJson(),
            'editions' => \App\Models\Data\Edition::all()->sortBy('order')->values()->toJson(),
            'moduleLengths' => \App\Models\Data\ModuleLength::all()->sortBy('order')->values()->toJson(),
            'settings' => \App\Models\Data\Setting::all()->sortBy('name')->values()->toJson(),
        ];

        return view('default', $out);
    }

    public function user(Request $request)
    {
        return response()->json($request->user());
    }
}