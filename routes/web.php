<?php

Auth::routes();

Route::group(['middleware' => 'role:user', 'prefix' => 'user'], function() {
    Route::get('', 'ProfileController@index');
    Route::post('verify', 'ProfileController@sendVerificationEmail');
    Route::get('verify/{code}', 'Auth\RegisterController@verify');
});

// Users controller is entirely restricted to administrators
Route::group(['middleware' => 'role:administrator', 'prefix' => 'users'], function() {
    Route::get('', 'UsersController@index');
    Route::get('{user}', 'UsersController@get');
    Route::post('', 'UsersController@store');
    Route::post('{user}', 'UsersController@update');
    Route::delete('{user}', 'UsersController@destroy');
});

// Following are CRUD controllers with similar implementations with identical route bindings.
$crudRoutes = [
    ['prefix' => 'contributors', 'parameter' => 'contributor', 'controller' => 'ContributorsController'],
    ['prefix' => 'contributorTypes', 'parameter' => 'contributorType', 'controller' => 'ContributorTypesController'],
    ['prefix' => 'creatures', 'parameter' => 'creature', 'controller' => 'CreaturesController'],
    ['prefix' => 'creatureTypes', 'parameter' => 'creatureType', 'controller' => 'CreatureTypesController'],
    ['prefix' => 'editions', 'parameter' => 'edition', 'controller' => 'EditionsController'],
    ['prefix' => 'items', 'parameter' => 'item', 'controller' => 'ItemsController'],
    ['prefix' => 'moduleLengths', 'parameter' => 'moduleLength', 'controller' => 'ModuleLengthsController'],
    ['prefix' => 'modules', 'parameter' => 'module', 'controller' => 'ModulesController'],
    ['prefix' => 'publishers', 'parameter' => 'publisher', 'controller' => 'PublishersController'],
    ['prefix' => 'settings', 'parameter' => 'setting', 'controller' => 'SettingsController'],
];

foreach ($crudRoutes as $route) {
    Route::group(['prefix' => $route['prefix']], function () use ($route) {
        Route::get("", "{$route['controller']}@index");
        Route::get("{{$route['parameter']}}", "{$route['controller']}@get");

        Route::post("", "{$route['controller']}@store")
            ->middleware('role:contributor');
        Route::post("{{$route['parameter']}}", "{$route['controller']}@update")
            ->middleware('role:contributor');
        Route::delete("{{$route['parameter']}}", "{$route['controller']}@destroy")
            ->middleware('role:moderator');
    });
}

// Fallthrough for all other requests (which might correspond to a react-router route)
Route::get('{all}', 'HomeController@index')->where('all', '^(?!api).*$');