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
        $import = DB::table('import_product')->join('product','import_product.product_id','=','product.product_id')->select()->orderBy('import_product_date','desc')->get();
        return view('admin.importproduct', compact('import' ,'product_names'))->with('i', (request()->input('page',1)-1)*5);
    }

    public function store(Request $request){
        $product_name                   = $request->product_name;
        $product_names                  = AdminProduct::select()->where('product_name',$product_name)->get();
        $product_id                     = self::GetProductId($product_names, $product_name);
        $import_product_quantity        = $request->import_product_quantity;
        $import_product_price_per_unit  = $request->import_product_price_per_unit;
        $import_product_date            = $request->import_product_date;
        $import_product_total_payment   = $import_product_quantity * $import_product_price_per_unit;

        $import = new Importproduct;
        $import->product_id                     = $product_id;
        $import->import_product_quantity        = $import_product_quantity;
        $import->import_product_price_per_unit  = $import_product_price_per_unit;
        $import->import_product_date            = $import_product_date;
        $import->import_product_total_payment   = $import_product_total_payment;
        $import->save();

        $product = AdminProduct::find($product_id);
        $product->product_quantity += $import_product_quantity;
        $product->save();

        return redirect()->route('import.index')->with('succ-msg','Import Successfully');
    }   

    public function destroy($import_product_id){
        $import = Importproduct::find($import_product_id);
        $import->delete();
        
        return redirect()->route('import.index')->with('succ-msg','Delete Successfully');
    }

    function GetProductId($product_names,$product_name)
    {
        $pro_id = 0;
        foreach($product_names as $newPro)
        {
             if($newPro->product_name == $product_name)
             {
                $pro_id = $newPro->product_id;
             }
        }
        return  $pro_id;
    }
}
