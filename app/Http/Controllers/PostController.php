<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function createPost(Request $request)
    {
        $post = Post::create([
            // 'description' => "♡♡♡♡♡♡♡♡♡",
            // 'picture_path' => 'snoopy_4.jpeg',
            // 'user_id' => '1',

            'description' => $request->input('description'),
            'picture_path' => $request->input('picture_path'),
            'user_id' => $request->input('user_id'),
        ]);

        return $post;
    }

    public function getAllPosts()
    {
        return Post::all();
    }
    public function modifyPost()
    {
        // $post = Post::find(2);
        // $post->picture_path = 'snoopy_2.png';
        // $post->save();
    }
}