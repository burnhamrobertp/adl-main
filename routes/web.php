<?php

Auth::routes();

Route::get('/user', 'UserController@index');
Route::get('{all}', 'HomeController@index')->where('all', '^(?!api).*$');