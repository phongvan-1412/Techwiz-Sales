<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\SignupSigninController as Signupin;
use App\Models\Admin;
use App\Models\Customer;
use Session;
use Mail;
use Str;
use App\Http\Controllers\CustomerApi;

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
        $user = Customer::select()->where('customer_email',$email)->where('customer_pwd',$pwd)->first();

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
        }elseif($user){
            Session::put('customer_id',$user->customer_id);
            Session::put('customer_name',$user->customer_name);
            Session::put('customer_email',$user->customer_email);
            Session::put('customer_pwd',$user->customer_pwd);
            Session::put('customer_contact',$user->customer_contact);
            Session::put('customer_dob',$user->customer_dob);
            Session::put('customer_img_name',$user->customer_img_name);
            Session::put('customer_address',$user->customer_address);
            Session::put('status',$user->status);
            Session::put('token',$user->token);
            CustomerApi::CustomerLoginInfo($user);
            return redirect('/userprofile');
        }else{
            return redirect()->back()->withInput()->with('msg','Incorrect email or password !');
        }
    }

    public function Logout(Request $request){
        CustomerApi::CustomerLoginInfo();
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

        $isExist = Customer::select()->where('customer_email', $request->email)->exists();

        if($isExist){
            return redirect()->back()->withInput()->with('msg','Email already exist');
        }else{
            $register = new Customer;
            $register->customer_name = $request->firstname.' '.$request->lastname;
            $register->customer_email = $request->email;
            $register->customer_pwd = md5($request->password);
            $register->customer_contact = $request->phonenumber;
            $register->status = 0;
            $register->token = strtoupper(Str::random(10));
            $register->save();
            if($register){
                Mail::send('emails.test', compact('register'), function($email) use($register){
                    $email->subject('VNHP Grocery - Verify account');
                    $email->to($register->customer_email, $register->customer_name);
                });
                return redirect('/login')->with('warn-msg', 'Please verify your email!');
            }
            return redirect()->back();
        }
    }

    public function actived(Customer $customer, $token){
        if($customer->token == $token){
            $customer->update(['status'=>1]);
            return redirect('/login')->with('succ-msg','Verify successfully');
        }
    }

    public function forgetPass(){
        return view('forgetPass');
    }

    public function postForgetPass(Request $request){

        $isExist = Customer::where('customer_email', $request->email)->exists();
        $customer = Customer::where('customer_email', $request->email)->first();

        if($isExist){
            Mail::send('emails.check_email_forget', compact('customer'), function($email) use($customer) {
                $email->subject('VNHP Grocery - Reset password');
                $email->to($customer->customer_email, $customer->customer_name);
                $token = strtoupper(Str::random(10));
                $customer->update(['token'=>$token]);
            });
            return redirect('/login')->with('warn-msg','Please check your email');
        }else{
            return redirect()->back()->with('fail-msg','Email does not exist');
        }
    }

    public function getPass(Customer $customer, $token){
        if ($customer->token === $token){
            return view('getPass', compact('customer'));
        }
        return abort(404);
    }
    public function postGetPass( Request $request){

        $customer = Customer::find($request->customer_id);
        $customer->customer_pwd = md5($request->password);
        $customer->status = 1;
        $customer->update();
        return redirect('/login')->with('succ-msg', 'Reset password successfully');
    }

}
