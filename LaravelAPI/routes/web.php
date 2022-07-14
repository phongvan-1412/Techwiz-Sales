<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController as Admin;
use App\Http\Controllers\CustomerController as Customer;
use App\Http\Controllers\PaymentController as Payment;
use App\Http\Controllers\CategoryController as Category;
use App\Http\Controllers\ProductController as Product;
use App\Http\Controllers\ImportProductController as Import;
use App\Http\Controllers\BillController as Bill;
use App\Http\Controllers\SignupSigninController as Signupin;
use App\Http\Controllers\ProfileController as Profile;

use App\Http\Middleware\CheckLoginMiddleware;

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
Route::prefix('/')->middleware('checklogin')->group(function(){
    Route::get('/', function () {
        return view('admin.dashboard');
    })->name('dasboard');
    Route::get('/dashboard', function () {
        return view('admin.dashboard');
    })->name('dasboard');
    Route::resource('/adminprofile', Admin::class);
    Route::resource('/customerprofile', Customer::class);
    Route::resource('/payment', Payment::class);
    Route::resource('/category', Category::class);
    Route::resource('/product', Product::class);
    Route::resource('/import', Import::class);
    Route::get('/bill', [Bill::class, 'index']);
    Route::resource('/profile', Profile::class);

});


// LOGIN
Route::get('/login', [Signupin::class, 'getLoginForm']);
Route::post('/login/check', [Signupin::class, 'Login']);
Route::get('/logout', [Signupin::class, 'Logout']);
// FORGET PASSWORD
Route::get('/forget-password', [Signupin::class, 'forgetPass'])->name('forgetpass');
Route::post('/forget-password', [Signupin::class, 'postForgetPass']);
Route::get('/get-password/{customer}/{token}', [Signupin::class, 'getPass'])->name('getPass');
Route::post('/get-password', [Signupin::class, 'postGetPass'])->name('postGetPass');
// REGISTER
Route::get('/register',[Signupin::class, 'getSignupform']);
Route::post('/register/check',[Signupin::class, 'Register']);
Route::get('/actived/{customer}/{token}',[Signupin::class, 'actived'])->name('customer.actived');

Route::get('/userprofile', function(){
    return view('user.userprofile');
});