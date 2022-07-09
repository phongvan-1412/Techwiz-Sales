<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer;

class CustomerController extends Controller
{
    public function index(){
        $customer = Customer::paginate(6);
        return view('admin.customerinformation', compact('customer'))->with('i', (request()->input('page',1)-1)*5);
    }

    public function store(Request $request)
    {   $customer_name =  $request->customer_name;
        $customer_email = $request->customer_email;
        $customer_pwd = md5($request->customer_pwd);
        $isExist = Customer::select()->where('customer_email', $customer_email)->exists();
        if($isExist){
            return redirect()->route('customerprofile.index')->with('fail-msg', 'Email is already exist');
        }else{
            $customer = new Customer;
            $customer->customer_name = $customer_name;
            $customer->customer_email = $customer_email;
            $customer->customer_pwd = $customer_pwd;
            $customer->save();
            return redirect()->route('customerprofile.index')->with('succ-msg', 'New admin account created');
        }
    }
    public function destroy($customer_id)
    {
        $customer = Customer::find($customer_id);

        $customer->delete();
        return redirect()->route('customerprofile.index')->with('msg', 'Deleted Successfully');
    }
}
