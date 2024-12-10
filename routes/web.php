<?php

use App\Http\Controllers\Controller;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


Route::get('/',[\App\Http\Controllers\Api\v1\CartController::class,'index']);


Route::get('/signup',[UserController::class,'create'])->name('register');
Route::post('/store',[UserController::class,'store'])->name('signup');
Route::post('/logout',[UserController::class,'logout'])->name('logout');
Route::post('/authenticate',[UserController::class,'authenticate'])->name('authenticate');

