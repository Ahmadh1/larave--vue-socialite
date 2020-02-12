<?php


Route::get('/{any?}', function () {
    # dd('some junk');
    return view('welcome');
})->where('any', '.*');


