<?php
use App\Model\Post;
use Illuminate\Http\Request;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {

    return $request->user();
});


//Route::get('/posts', "PostController@index");

Route::namespace('Api')->prefix('/posts')->group(function(){
//localhost:8000/api/posts
    Route::get('/', "PostController@index");
//localhost:8000/api/posts/3
    Route::get('/{id}', "PostController@show");


});
