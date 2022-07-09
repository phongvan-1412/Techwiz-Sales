<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\AdminProduct;
use App\Models\AdminCategory;


class ProductController extends Controller
{
    public function index(){
        $categories = AdminCategory::select('category_name')->get();
        $products = AdminProduct::paginate(500);
        return view('admin.product', compact('products','categories'))->with('i', (request()->input('page',1)-1)*5);
    }
}
