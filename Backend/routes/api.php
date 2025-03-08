<?php                                                                                            

use App\Http\Controllers\ApplicantController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostTuitionController;
use App\Http\Controllers\InterestedTutorController;
use App\Http\Controllers\ChatController;
use Illuminate\Support\Facades\Route;



Route::group(['middleware' => 'auth:api'], function () {
    Route::get('/profile', [AuthController::class, 'profile']);
    Route::post('/logout', [AuthController::class, 'logout']);
});



Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

Route::group(['middleware' => 'auth:tutor'], function () {
    Route::get('/tutor/profile', [AuthController::class, 'profileTutor']);  
    Route::post('/tutor/logout', [AuthController::class, 'logoutTutor']); 
});

Route::post('/register/tutor', [AuthController::class, 'registerTutor']);
Route::post('/login/tutor', [AuthController::class, 'loginTutor']);

Route::get('post-tuitions', [PostTuitionController::class, 'index']);
Route::post('post-tuitions', [PostTuitionController::class, 'store']);
Route::get('post-tuitions/{id}', [PostTuitionController::class, 'show']);
Route::put('post-tuitions/{id}', [PostTuitionController::class, 'update']);
Route::delete('post-tuitions/{id}', [PostTuitionController::class, 'destroy']);

Route::get('/interested-tutors', [InterestedTutorController::class, 'index']);
Route::post('/interested-tutors', [InterestedTutorController::class, 'store']);
Route::get('/interested-tutors/{id}', [InterestedTutorController::class, 'show']);
Route::put('/interested-tutors/{id}', [InterestedTutorController::class, 'update']);
Route::delete('/interested-tutors/{id}', [InterestedTutorController::class, 'destroy']);

Route::middleware('auth:api')->group(function () {
    Route::get('/messages', [ChatController::class, 'index']); // Get all messages
    Route::post('/send-message', [ChatController::class, 'broadcast']); // Send and broadcast message
    Route::get('/receive-messages', [ChatController::class, 'receive']); // Get messages for the user
});

Route::post('/applicant', [ApplicantController::class, 'store']);