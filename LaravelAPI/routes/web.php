<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController as Admin;
use App\Http\Controllers\CustomerController as Customer;
use App\Http\Controllers\PaymentController as Payment;
use App\Http\Controllers\CategoryController as Category;
use App\Http\Controllers\ProductController as Product;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('admin.dashboard');
});

Route::resource('/adminprofile', Admin::class);
Route::resource('/customerprofile', Customer::class);
Route::resource('/payment', Payment::class);
Route::resource('/category', Category::class);
Route::resource('/product', Product::class);


