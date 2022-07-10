<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\SignupSigninController as Signupin;
use App\Models\Admin;
use App\Models\Customer;
use Session;


class SignupSigninController extends Controller
{

    public function getLoginForm(){
        return view('loginform');    
    }

    public function Login(Request $request){
        $this->validate($request,[
            'email'=>'required',
            'pwd'=>'required|min:5|max:16'
        ],[
            'email.required' => 'Email field is required',
            'pwd.required' => 'Password field is required',
            'pwd.min' => 'Password too short',
            'pwd.max' => 'Password too long'
        ]);
        $email = $request->email;
        $pwd = md5($request->pwd);
         
        $admin = Admin::select()->where('emp_email', $email)->where('emp_pwd', $pwd)->first();
        if($admin){
            Session::put('emp_id', $admin->emp_id);
            Session::put('emp_name', $admin->emp_name);
            Session::put('emp_email', $admin->emp_email);//
            Session::put('emp_pwd', $admin->emp_pwd);
            Session::put('emp_contact', $admin->emp_contact);//
            Session::put('emp_dob', $admin->emp_dob);//
            Session::put('emp_img_name', $admin->emp_img_name);//
            Session::put('emp_address', $admin->emp_address);  
            return redirect('/dashboard');
        }else{
            return redirect()->back()->withInput()->with('msg','Incorrect email or password !');
        }
    }

    public function Logout(Request $request){
        $request->session()->flush();
        return redirect()->action([Signupin::class, 'getLoginForm']);
    }

    public function getSignupform(){
        return view('registerform');
    }

    public function Register(Request $request){
        $this->validate($request,[
            'firstname'=>'required',
            'lastname'=>'required',
            'email'=>'required|email',
            'password'=>'required|min:3|max:16',
            'phonenumber'=>'required|min:10|max:12'

        ],[
            'firstname.required'=>'First name is required',
            'lastname.required'=>'Last name is required',
            'email.email'=>'Invalid email',
            'email.required' => 'Email is required',
            'password.required' => 'Password is required',
            'password.min' => 'Password is too short',
            'password.max' => 'Password is too long',
            'phonenumber.min'=>'Invalid Phonenumber',
            'phonenumber.max'=>'Invalid Phonenumber'
        ]);

        $isExist = Customer::select()->where('customer_email', $request->email)->Exists();

        if($isExist){ 
            $register = new Customer;
            $register->customer_name = $request->firstname.' '.$request->lastname;
            $register->customer_email = $request->email;
            $register->customer_pwd = md5($request->password);
            $register->customer_contact = $request->phonenumber;
            $register->save();
            return redirect('/login')->with('succ-msg', 'Successfully Registered');

        }else{
            return redirect()->back()->withInput()->with('msg','Email already exist'); 
        }
    }


}