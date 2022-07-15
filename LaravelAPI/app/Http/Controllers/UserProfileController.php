<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Customer;
use Session;

class UserProfileController extends Controller
{
    public function index(){
        return view('user.userprofile');   
    }
    public function store(Request $request){
        $fullname       = $request->fullname;
        $address        = $request->address;
        $phonenumber    = $request->phonenumber;
        $dateofbirth    = $request->dateofbirth;
        $customer_id    = Session::get('customer_id');
        $avatar         = $request->file('avatar');
        $avatar_name    = Session::get('customer_img_name');
        if ($request->hasFile('avatar'))
        {
            $extension  = $request->file('avatar')->extension(); // Cắt đuôi file img
            $avatar_name= time().'-'.'avatar.'.$extension;       // Nối đuôi file img vào tên mới của img
            $avatar->move(public_path('avatar'), $avatar_name);  // Lưu image vào public/upload
        }

        $update = Customer::find($customer_id);
        $update->customer_name       = $fullname;
        $update->customer_contact    = $phonenumber;
        $update->customer_dob        = $dateofbirth;
        $update->customer_img_name   = $avatar_name;
        $update->customer_address    = $address;
        $update->update();

        return redirect()->back()->withInput(); 
    }
    public function update(Request $request, $customer_id){
        $currentpwd = $request->currentpwd;
        if($currentpwd = Session::get('customer_pwd')){
            $changepwd = Customer::find($customer_id);
            $changepwd->customer_pwd = md5($request->newpwd);
            $changepwd->save();
            return redirect()->route('userprofile.index');
        }else{
            return redirect()->back()->withInput()->with('fail-msg','Incorrect current password'); 
        }

    }
}
