<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function signUp(Request $request)
    {
        $user = User::create([
            'nickname' => $request->input('nickname'),
            'firstname' => $request->input('firstname'),
            'lastname' => $request->input('lastname'),
            'email' => $request->input('email'),
            'password' => $request->input('password'),

        ]);

        dd($user);

        // $user = User::create([
        //     'nickname' => 'Snoopy',
        //     'firstname' => 'Snapp',
        //     'lastname' => 'Shot',
        //     'email' => 'snoopy@gmail.com',
        //     'password' => 'snoopythebest75!',
        // ]);


        return $user;
    }
}