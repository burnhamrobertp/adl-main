<?php

$crudRoutes = [
    ['prefix' => 'contributors', 'parameter' => 'contributor', 'controller' => 'ContributorsController'],
    ['prefix' => 'contributorTypes', 'parameter' => 'contributorType', 'controller' => 'ContributorTypesController'],
    ['prefix' => 'creatures', 'parameter' => 'creature', 'controller' => 'CreaturesController'],
    ['prefix' => 'creatureTypes', 'parameter' => 'creatureType', 'controller' => 'CreatureTypesController'],
    ['prefix' => 'editions', 'parameter' => 'edition', 'controller' => 'EditionsController'],
    ['prefix' => 'items', 'parameter' => 'item', 'controller' => 'ItemsControlller'],
    ['prefix' => 'moduleLengths', 'parameter' => 'moduleLength', 'controller' => 'ModuleLengthsController'],
    ['prefix' => 'modules', 'parameter' => 'module', 'controller' => 'ModulesController'],
    ['prefix' => 'publishers', 'parameter' => 'publisher', 'controller' => 'PublishersController'],
    ['prefix' => 'settings', 'parameter' => 'setting', 'controller' => 'SettingsController'],
];

Route::group(['middleware' => ['api']], function () use ($crudRoutes) {
    Route::group(['prefix' => 'auth'], function () {
        Route::post('', 'Auth\LoginController@login');
    });
    
    foreach ($crudRoutes as $route) {
        Route::group(['prefix' => $route['prefix']], function() use ($route) {
            Route::get("", "{$route['controller']}@index");
            Route::get("{{$route['parameter']}}", "{$route['controller']}@get");
            Route::post("", "{$route['controller']}@store");
            Route::post("{{$route['parameter']}}", "{$route['controller']}@update");
            Route::delete("{{$route['parameter']}}", "{$route['controller']}@destroy");
        });
    }
});