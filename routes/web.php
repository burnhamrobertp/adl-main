<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $out = [
        'contributorTypes' => \App\Models\Data\ContributorType::all()->sortBy('name')->values()->toJson(),
        'creatureTypes' => \App\Models\Data\CreatureType::all()->sortBy('name')->values()->toJson(),
        'editions' => App\Models\Data\Edition::all()->sortBy('order')->values()->toJson(),
        'moduleLengths' => \App\Models\Data\ModuleLength::all()->sortBy('order')->values()->toJson(),
        'settings' => \App\Models\Data\Setting::all()->sortBy('name')->values()->toJson(),
    ];

    return view('default', $out);
});
