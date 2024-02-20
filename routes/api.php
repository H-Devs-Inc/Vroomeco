<?php

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/roads', 'App\Http\Controllers\RoadController@index'); 

// Route pour la creation d'une route
Route::post('/create-roads', 'App\Http\Controllers\RoadController@create'); 

// Route pour la recherche d'une route avec le controller RoadController et la methode search
Route::post('/search', 'App\Http\Controllers\RoadController@search'); 

// Route pour la recherche d'une route part uuid  avec le controller RoadController et la methode show
Route::get('/roads/{uuid}', 'App\Http\Controllers\RoadController@show');
