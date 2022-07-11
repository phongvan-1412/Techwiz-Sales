<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryAPI;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/selectcategoryroot',[CategoryAPI::class, 'SelectCategoryRoot']);
Route::get('/selectallcategory',[CategoryAPI::class, 'SelectCategories']);


Route::get('/selectactiveblog',[ProductAPI::class, 'SelectProducts']);
// Route::get('/selectactiveblog',[BlogApi::class, 'SelectActiveBlog']);
// Route::get('/selectactiveblog',[BlogApi::class, 'SelectActiveBlog']);
// Route::get('/selectactiveblog',[BlogApi::class, 'SelectActiveBlog']);
