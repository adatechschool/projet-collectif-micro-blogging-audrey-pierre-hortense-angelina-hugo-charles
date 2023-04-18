<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Str;

class UserController extends Controller
{
    public function index()
    {
        return User::all();
    }
    public function store(Request $request)
    {
        $user = User::create([
            'nickname' => $request->input('nickname'),
            'firstname' => $request->input('firstname'),
            'lastname' => $request->input('lastname'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
        ]);

        return $user;
    }

    public function show(User $user, Request $request)
    {
        if ($request->nickname !== $user->nickname) {
            return response()->json(['message' => 'infos incorrectes'], 401);
        } else if (bcrypt($user->password) !== $request->password) {
            return response()->json(['message' => 'infos incorrectes'], 401);
        }
        return response()->json($user);
    }


    public function update(Request $request, User $user)
    {
    }

    public function destroy(User $user)
    {
        $user->delete();
    }
}