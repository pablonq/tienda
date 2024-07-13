<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('auth')->group(function () {
  Route::post('register',[AuthController::class, 'register']);
  Route::post('login',[AuthController::class, 'login']);
 /*Route::post('logout',[AuthController::class, 'logout']);
  Route::post('refresh',[AuthController::class, 'refresh']);
  Route::post('me',[AuthController::class, 'me']); */
});