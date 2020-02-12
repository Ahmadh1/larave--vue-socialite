<?php

use Illuminate\Http\Request;

Route::group(['middleware' => 'auth:api'], function () {
    Route::get('user', function (Request $request) {
        return $request->user();
    });
});
Route::post('/login', 'API\AuthController@login');
Route::post('/register', 'API\AuthController@register');