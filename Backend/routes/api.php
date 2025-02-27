<?php                                                                                            

use App\Http\Controllers\TestController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostTuitionController;
use Illuminate\Support\Facades\Route;


use Illuminate\Support\Facades\Route;


Route::group(['middleware' => 'auth:api'], function () {
    Route::get('/profile', [AuthController::class, 'profile']);
    Route::post('/logout', [AuthController::class, 'logout']);
});



Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);



Route::get('post-tuitions', [PostTuitionController::class, 'index']);
Route::post('post-tuitions', [PostTuitionController::class, 'store']);
Route::get('post-tuitions/{id}', [PostTuitionController::class, 'show']);
Route::put('post-tuitions/{id}', [PostTuitionController::class, 'update']);
Route::delete('post-tuitions/{id}', [PostTuitionController::class, 'destroy']);



Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

