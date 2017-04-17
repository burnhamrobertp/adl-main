<?php

Auth::routes();

Route::get('/user', 'HomeController@user');
Route::get('{all}', 'HomeController@index')->where('all', '^(?!api).*$');