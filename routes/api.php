<?php

use App\Http\Controllers\Api\v1\ApiUserController;
use App\Http\Controllers\Api\v1\CartController;
use App\Http\Controllers\Api\v1\OrderController;
use App\Http\Controllers\api\v1\ProductController;
use App\Http\Controllers\Api\v1\StripeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful;

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

/*Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});*/
Route::group(['prefix'=> 'v1','middleware' => ['auth:sanctum']],function(){
   Route::apiResource('users', ApiUserController::class);
   Route::apiResource('products', ProductController::class);
   Route::apiResource('carts', CartController::class);
   Route::apiResource('orders', OrderController::class);
});

Route::post('v1/authenticate',[ApiUserController::class,'authenticate']);
Route::post('v1/stripe',[StripeController::class,'createPaymentIntent']);
Route::post('v1/register',[ApiUserController::class,'register']);
Route::post('v1/logout',[ApiUserController::class,'logout'])->middleware('auth:sanctum');
Route::get('v1/user',[ApiUserController::class,'getuser'])->middleware('auth:sanctum');
/*Route::get('v1/user',function (Request $request){
    return response()->json(['user'=>$request->user()]);
});*/
// api
