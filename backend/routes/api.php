<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

/* --------------------------- Authenticaiton API --------------------------- */
Route::prefix('auth')->controller(AuthController::class)->middleware('auth:api')->group(function() {
    Route::post('/login', 'login')->withoutMiddleware('auth:api');
    Route::get('/me', 'me');
});
/* --------------------------- Authenticaiton API --------------------------- */
