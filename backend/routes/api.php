<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
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

Route::middleware('auth:api')->group(function() {
    /* --------------------------- Authenticaiton API --------------------------- */
    Route::prefix('auth')->controller(AuthController::class)->group(function() {
        Route::post('/login', 'login')->withoutMiddleware('auth:api');
        Route::get('/me', 'me');
    });
    /* --------------------------- Authenticaiton API --------------------------- */

    /* ------------------------------ CATEGORY API ------------------------------ */
    Route::prefix('category')->controller(CategoryController::class)->group(function () {
        Route::get('/', 'index');
    });
    /* ------------------------------ CATEGORY API ------------------------------ */
});
