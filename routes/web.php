<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/home', function(){
    return Inertia::render('Welcome');
});

Route::get('/trajects', function(){
    // $trajects = Traject::all();
    return Inertia::render('Trajects/Trajects');
});

Route::get('/about-us', function(){
    return Inertia::render('About/AboutUs');
});

Route::get('/contact', function(){
    return Inertia::render('Contacts/Contact');
});
// route de succes qui renvois un message si le paiement est effectué sous format json afficher dans le navigateur en faison appel a la methode success du controller PaiementsController
Route::get('/paiement/success', 'App\Http\Controllers\PayementsController@success')->name('paiement.success');
Route::get('/paiement/cancel', 'App\Http\Controllers\PayementsController@cancel')->name('paiement.cancel');

require __DIR__.'/auth.php';
