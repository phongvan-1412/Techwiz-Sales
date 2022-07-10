<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AdminCategory;
use DB;

class CategoryController extends Controller
{

    public function index()
    {
        // $categories = AdminCategory::select()
        //     ->join('category', 'category.category_root', '=', 'category.category_id')
        //     ->select('category.*', 'category.category_name')
        //     ->get();

        $category_roots = AdminCategory::select()->whereNull('category_root')->get();
        $categories = DB::select('exec sp_show_category');
        return view('admin.category', compact('categories', 'category_roots'))->with((request()->input('page',1)-1)*5);;
    }


    public function store(Request $request){
        $category_name = $request->category_name;
        $category_root = $request->category_root;
        $category_roots = AdminCategory::select()->where('category_name', $category_root)->get();
        $category_root_id = self::GetCategoryId($category_roots,$category_root);
        $isExist = AdminCategory::select()->where('category_name', $category_name)->exists();
        if($isExist){
            return redirect()->route('category.index')->with('fail-msg', 'Category already exist');
        }else{
            $category = new AdminCategory;
            $category->category_name = $category_name;
            $category->category_root = $category_root_id;
            $category->category_status = 1;
            $category->save();
            return redirect()->route('category.index')->with('succ-msg', 'Add category successfully');
        }
    }

    public function edit(AdminCategory $category)
    {
        $category_root_name = AdminCategory::select()->whereNull('category_root')->get();
        return view('admin.editcategory', compact('category', 'category_root_name'));
    }

    public function update(Request $request, $category_id)
    {
        $category_name = $request->category_name;
        $category_root = $request->category_root;
        $category_roots = AdminCategory::select()->where('category_name', $category_root)->get();
        $category_root_id = self::GetCategoryId($category_roots,$category_root);
        $status = $request->category_status;
        $st=0;
        if($status == "on"){$st=1;}else{$st=0;} 
        $category = AdminCategory::find($category_id);
        $category->category_name = $category_name;
        $category->category_root = $category_root_id;
        $category->category_status = $st;
        $category->save();
        return redirect()->route('category.index')->with('succ-msg', 'Update category successfully');
    
    }

    public function destroy($category_id){
        $category = AdminCategory::find($category_id);
        $category->delete();
        return redirect()->route('category.index')->with('succ-msg', 'Deleted Successfully');
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
