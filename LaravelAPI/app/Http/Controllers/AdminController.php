<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;

class AdminController extends Controller
{

    public function index(){   
        $admin = Admin::paginate(6);
        return view('admin.admininformation', compact('admin'))->with('i', (request()->input('page',1)-1)*5);
    }

    public function store(Request $request){   
        $emp_name =  $request->emp_name;
        $emp_email = $request->emp_email;
        $emp_pwd = md5($request->emp_pwd);
        $isExist = Admin::select()->where('emp_email', $emp_email)->exists();
        if($isExist){
            return redirect()->route('adminprofile.index')->with('fail-msg', 'Email is already exist');
        }else{
            $admin = new Admin;
            $admin->emp_name = $emp_name;
            $admin->emp_email = $emp_email;
            $admin->emp_pwd = $emp_pwd;
            $admin->save();
            return redirect()->route('adminprofile.index')->with('succ-msg', 'New admin account created');
        }
    }

    public function destroy($emp_id){
        $admin = Admin::find($emp_id);
        $admin->delete();
        return redirect()->route('adminprofile.index')->with('msg', 'Deleted Successfully');
    }
}

