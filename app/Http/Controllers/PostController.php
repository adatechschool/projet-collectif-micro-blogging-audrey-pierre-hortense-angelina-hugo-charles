<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function createPost(Request $request)
    {
        $post = \App\Models\Post::create([
            // 'description' => 'Très belle photo de moi, Snoopy le beau gosse du 75',
            // 'picture_path' => './public/snoopy.jpeg',
            // 'user_id' => '1',

            'description' => $request->input('description'),
            'picture_path' => $request->input('picture_path'),
            'user_id' => $request->input('user_id'),
        ]);

        return $post;
    }
}
