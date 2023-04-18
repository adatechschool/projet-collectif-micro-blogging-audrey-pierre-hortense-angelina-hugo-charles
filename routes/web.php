<?php

use App\Models\Post;
use Illuminate\Http\Request;
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
// use App\Http\Controllers\UserController;

// Route::get('signup', [UserController::class, 'signUp']);

// use App\Http\Controllers\PostController;

// Route::get('createpost', [PostController::class, 'createPost']);
// Route::get('/', [PostController::class, 'getAllPosts']);
// Route::get('/modifypost', [PostController::class, 'modifyPost']);

























// Route::get('/', function () {
//     return view('welcome');
// });


// Route::prefix('/blog')->name('blog.')->group(function () {


//     Route::get('/', function (Request $request) {

//         //Créer un post
//         $post = \App\Models\Post::create([
//             'title' => 'Mon nouveau titre',
//             'slug' => 'nouveau-titre-test-2',
//             'description' => 'Nouveau contenu',
//             'picture_path' => 'nouvelle photo',
//         ]);

//         // dd($post);

//         return $post;

//         // $post = new \App\Models\Post();

//         // $post->title = "Mon deuxieme article";
//         // $post->slug = "Mon-deuxieme-article";
//         // $post->description = "Ma description";
//         // $post->picture_path = "mon-image";
//         // $post->save();

//         // return $post;

//         // $posts = \App\Models\Post::all(['id', 'title']);

//         // //trouver un article spécifique et modifier son titre
//         // $posts = \App\Models\Post::find(1);
//         // $posts->title = 'Nouveau titre';
//         // $posts->save();
//         // supprimer un element
//         // $posts->delete();

//         // //trouver un article spécifique et renvoie une page d'erreur si il n'existe pas.
//         // $posts = \App\Models\Post::findOrFail(3);

//         // affiche moi deux elements par page.
//         // $posts = \App\Models\Post::paginate(2);

//         // trouver les articles dont l'id est > à 0 et affiche moi deux elements maximum.
//         // $posts = \App\Models\Post::where('id', '>', '0')->limit(2)->get();

//         // dd($posts);

//         // return $posts;

//         // return [
//         //     "link" => \route('blog.show', ['slug' => 'article', 'id' => 13]),

//         // ];
//     })->name('index');


//     Route::get('/{slug}-{id}', function (string $slug, string $id, Request $request) {
//         return [
//             "slug" => $slug,
//             'id' => $id,
//             "name" => $request->input("name")
//         ];
//     })->where([
//         'id' => '[0-9]+',
//         'slug' => '[a-z0-9\-]+'
//     ])->name('show');
// });
