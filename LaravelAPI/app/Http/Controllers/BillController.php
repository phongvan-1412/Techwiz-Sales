<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class BillController extends Controller
{
    public function index(){
        $bills = DB::table('bill')->join('employee_account','bill.emp_id','=','employee_account.emp_id')
                                ->join('payment_mode','payment_mode.payment_mode_id','=','bill.payment_mode_id')
                                ->select()->orderBy('bill_date','desc')->get();
        $bill_details = DB::table('bill_detail')->join('product','bill_detail.product_id','=','product.product_id')->get();
        return view('admin.bill', compact('bills','bill_details'));
    }
}
