<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;
use Session;


class ProfileController extends Controller
{
    public function index(){
        return view('admin.profile');   
    }
    public function store(Request $request){
        $fullname   = $request->fullname;
        $address    = $request->address;
        $phonenumber= $request->phonenumber;
        $dateofbirth= $request->dateofbirth;
        $emp_id = Session::get('emp_id');
        $avatar     = $request->file('avatar');
        $avatar_name = Session::get('emp_img_name');
        if ($request->hasFile('avatar')){
            $extension  = $request->file('avatar')->extension(); // Cắt đuôi file img
            $avatar_name= time().'-'.'avatar.'.$extension;       // Nối đuôi file img vào tên mới của img
            $avatar->move(public_path('avatar'), $avatar_name);  // Lưu image vào public/upload
        }

        $update = Admin::find($emp_id);
        $update->emp_name       = $fullname;
        $update->emp_contact    = $phonenumber;
        $update->emp_dob        = $dateofbirth;
        $update->emp_img_name   = $avatar_name;
        $update->emp_address    = $address;
        $update->update();

        return redirect()->back()->withInput(); 
    }
    public function update(Request $request, $emp_id){
        $currentpwd = $request->currentpwd;
        if($currentpwd = Session::get('emp_pwd')){
            $changepwd = Admin::find($emp_id);
            $changepwd->emp_pwd = $request->newpwd;
            $changepwd->save();
            return redirect()->route('profile.index');
        }else{
            return redirect()->back()->withInput()->with('fail-msg','Incorrect current password'); 
        }

    }
}
