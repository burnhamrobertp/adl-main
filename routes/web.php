<?php

Auth::routes();

Route::get('{all}', function () {
    $out = [
        'contributorTypes' => \App\Models\Data\ContributorType::all()->sortBy('name')->values()->toJson(),
        'creatureTypes' => \App\Models\Data\CreatureType::all()->sortBy('name')->values()->toJson(),
        'editions' => App\Models\Data\Edition::all()->sortBy('order')->values()->toJson(),
        'moduleLengths' => \App\Models\Data\ModuleLength::all()->sortBy('order')->values()->toJson(),
        'settings' => \App\Models\Data\Setting::all()->sortBy('name')->values()->toJson(),
    ];

    return view('default', $out);
})->where('all', '^(?!api).*$');