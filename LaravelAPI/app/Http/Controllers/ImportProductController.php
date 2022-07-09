<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Importproduct;
use App\Models\AdminProduct;
use DB;

class ImportProductController extends Controller
{
    public function index(){
        $product_names = AdminProduct::select('product_name')->get();
        $import = DB::table('import_product')->join('product','import_product.product_id','=','product.product_id')->select()->get();
        return view('admin.importproduct', compact('import' ,'product_names'))->with('i', (request()->input('page',1)-1)*5);
    }
}
