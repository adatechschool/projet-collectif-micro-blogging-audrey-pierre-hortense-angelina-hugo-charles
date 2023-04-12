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

// Users routes

// Create
Route::post('/api/signup', function (Request $request) {

    $user = \App\Models\User::create([
        'nickname' => $request->input('nickname'),
        'firstname' => $request->input('firstname'),
        'lastname' => $request->input('lastname'),
        'email' => $request->input('email'),
        'password' => $request->input('password'),

    ]);

    // dd($user);
    print('coucou');
    return $user;
});


// Posts routes

// Create
Route::post('/api/post/create', function (Request $request) {
    $post = \App\Models\Post::create([

        'description' => $request->input('description'),
    ]);
    // dd($post);

    return $post;
});
