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
        'contributorTypes' => \App\ContributorType::all()->sortBy('name')->values()->toJson(),
        'creatureTypes' => \App\CreatureType::all()->sortBy('name')->values()->toJson(),
        'editions' => App\Edition::all()->sortBy('order')->values()->toJson(),
        'moduleLengths' => \App\ModuleLength::all()->sortBy('order')->values()->toJson(),
        'settings' => \App\Setting::all()->sortBy('name')->values()->toJson(),
    ];

    return view('default', $out);
});
