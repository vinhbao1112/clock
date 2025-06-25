<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/orders', function () {
        // TODO: return list of orders
    });

    Route::post('/orders', function (Request $request) {
        // TODO: create new order
    });

    Route::patch('/orders/{id}/status', function ($id) {
        // TODO: update order status
    });
});
