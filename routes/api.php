<?php

Route::group([ 'prefix' => 'contributors' ], function() {
    Route::get('', 'ContributorsController@index');
    Route::get('{contributor}', 'ContributorsController@get');
    Route::post('', 'ContributorsController@store');
    Route::post('{contributor}', 'ContributorsController@update');
    Route::delete('{contributor}', 'ContributorsController@destroy');
});

Route::group([ 'prefix' => 'contributorTypes' ], function() {
    Route::get('', 'ContributorTypesController@index');
    Route::get('{contributorType}', 'ContributorTypesController@get');
    Route::post('', 'ContributorTypesController@store');
    Route::post('{contributorType}', 'ContributorTypesController@update');
    Route::delete('{contributorType}', 'ContributorTypesController@destroy');
});

Route::group([ 'prefix' => 'creatures' ], function() {
    Route::get('', 'CreaturesController@index');
    Route::get('{creature}', 'CreaturesController@get');
    Route::post('', 'CreaturesController@store');
    Route::post('{creature}', 'CreaturesController@update');
    Route::delete('{creature}', 'CreaturesController@destroy');
});

Route::group([ 'prefix' => 'creatureTypes' ], function() {
    Route::get('', 'CreatureTypesController@index');
    Route::get('{creatureType}', 'CreatureTypesController@get');
    Route::post('', 'CreatureTypesController@store');
    Route::post('{creatureType}', 'CreatureTypesController@update');
    Route::delete('{creatureType}', 'CreatureTypesController@destroy');
});

Route::group([ 'prefix' => 'editions' ], function() {
    Route::get('', 'EditionsController@index');
    Route::get('{edition}', 'EditionsController@get');
    Route::post('', 'EditionsController@store');
    Route::post('{edition}', 'EditionsController@update');
    Route::delete('{edition}', 'EditionsController@destroy');
});

Route::group([ 'prefix' => 'items' ], function() {
    Route::get('', 'ItemsController@index');
    Route::get('{item}', 'ItemsController@get');
    Route::post('', 'ItemsController@store');
    Route::post('{item}', 'ItemsController@update');
    Route::delete('{item}', 'ItemsController@destroy');
});

Route::group([ 'prefix' => 'moduleLengths' ], function() {
    Route::get('', 'ModuleLengthsController@index');
    Route::get('{moduleLength}', 'ModuleLengthsController@get');
    Route::post('', 'ModuleLengthsController@store');
    Route::post('{moduleLength}', 'ModuleLengthsController@update');
    Route::delete('{moduleLength}', 'ModuleLengthsController@destroy');
});

Route::group([ 'prefix' => 'modules' ], function() {
    Route::get('', 'ModulesController@index');
    Route::get('{module}', 'ModulesController@get');
    Route::post('', 'ModulesController@store');
    Route::post('{module}', 'ModulesController@update');
    Route::delete('{module}', 'ModulesController@destroy');
});

Route::group([ 'prefix' => 'publishers' ], function() {
    Route::get('', 'PublishersController@index');
    Route::get('{publisher}', 'PublishersController@get');
    Route::post('', 'PublishersController@store');
    Route::post('{publisher}', 'PublishersController@update');
    Route::delete('{publisher}', 'PublishersController@destroy');
});

Route::group([ 'prefix' => 'settings' ], function() {
    Route::get('', 'SettingsController@index');
    Route::get('{setting}', 'SettingsController@get');
    Route::post('', 'SettingsController@store');
    Route::post('{setting}', 'SettingsController@update');
    Route::delete('{setting}', 'SettingsController@destroy');
});
