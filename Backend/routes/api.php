<?php

use App\Http\Controllers\TestController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostTuitionController;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// Route::get('/test', [TestController::class, 'getTestHuman']);
Route::get('/test/{id}', [TestController::class, 'getTestHumanWithId']);
Route::get('/test', function () {
    return response()->json(['message' => 'Backend connected successfully!']);
});


Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);



Route::get('post-tuitions', [PostTuitionController::class, 'index']);
Route::post('post-tuitions', [PostTuitionController::class, 'store']);
Route::get('post-tuitions/{id}', [PostTuitionController::class, 'show']);
Route::put('post-tuitions/{id}', [PostTuitionController::class, 'update']);
Route::delete('post-tuitions/{id}', [PostTuitionController::class, 'destroy']);


