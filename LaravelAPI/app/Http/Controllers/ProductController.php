<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\AdminProduct;
use App\Models\AdminCategory;
use DB;

class ProductController extends Controller
{
    public function index(){
        $categories = AdminCategory::select('category_name')->get();

        $products = DB::table('product')->join('category','product.category_id','=','category.category_id')->select()->orderBy("product_id","desc")->get();

        return view('admin.product', compact('products','categories'))->with('i', (request()->input('page',1)-1)*5);
    }

    public function store(Request $request){
        $product_name           = $request->product_name;
        $category_name          = $request->category_name;
        $category_names = AdminCategory::select()->where('category_name', $category_name)->get();
        $category_id = self::GetCategoryId($category_names,$category_name);

        $products = DB::table('product')->where('category_name',$category_name)->get();
        $countProduct = count($products) + 1;
        $tmp1 = substr($category_name,0,2);
        $product_SKU = "SKU".$tmp1.$countProduct;

        $product_price          = $request->product_price_per_unit;
        $product_information    = $request->product_information;
        $product_img            = $request->file('product_img_name');
        $product_img_extension          = $request->file('product_img_name')->extension();
        $product_img_name       = time().'-'.'product.'.$product_img_extension;
        $product_img->move(public_path('ProductImage'), $product_img_name);

        $isExist = AdminProduct::select()->where('product_name', $product_name)->exists();    
        if($isExist){
            return redirect()->route('product.index')->with('fail-msg','Product already Exists');
        }else{
            $product = new AdminProduct;
            $product->product_SKU = $product_SKU;
            $product->product_name  = $product_name;
            $product->category_id   = $category_id;
            $product->product_price_per_unit = $product_price;
            $product->product_information = $product_information;
            $product->product_img_name  = $product_img_name;
            $product->product_status = 1;
            $product->save();
            return redirect()->route('product.index')->with('succ-msg','Add product successfully');
        }
    }
    public function edit(AdminProduct $product)
    {
        $category_names = AdminCategory::select()->whereNotNull('category_root')->get();
        return view('admin.editproduct', compact('product', 'category_names'));
    }

    public function update(Request $request, $product_id)
    {
        $product_name = $request->product_name;
        $category_name = $request->category_name;
        $category_names = AdminCategory::select()->where('category_name', $category_name)->get();
        $category_id = self::GetCategoryId($category_names,$category_name);
        $product_price = $request->product_price_per_unit;
        $status = $request->product_status;
        $st=0;
        if($status == "on"){$st=1;}else{$st=0;} 
        $product = AdminProduct::find($product_id);
        $product->product_name = $product_name;
        $product->category_id = $category_id;
        $product->product_status = $st;
        $product->product_price_per_unit = $product_price;
        $product->save();
        return redirect()->route('product.index')->with('succ-msg', 'Update product successfully');
    
    }
    public function destroy($product_id){
        $product = AdminProduct::find($product_id);
        $product->delete();
        return redirect()->route('product.index')->with('succ-msg', 'Deleted Successfully');
    }

    function GetCategoryId($categories,$category_name)
    {
        $cate_id = 0;
        foreach($categories as $newCate)
        {
             if($newCate->category_name == $category_name)
             {
                 $cate_id = $newCate->category_id;
             }
        }
        return  $cate_id;
    }
}
