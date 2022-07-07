<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\NameSetting as Name;
use App\Models\Bill;
use App\Models\BillDetail;
use Carbon\Carbon;
use DateTime;

class BillApi extends Controller
{
    public function InsertBill(Request $request)
    {
        $current_date = Carbon::now()->toDateTimeString();
        DB::table('bill')->insert([
            'bill_date' => $current_date,
           ]);
        $current_bill = DB::table('bill')->where('bill_date', $current_date)->get();
        $bill_id = 0;
        foreach($current_bill as $bill)
        {
            $bill_id = $bill->bill_id;
        }

        // duyệt mảng bill_detail

        // foreach($request as $bill_detail)
        // {
        //     $data = new BillDetail();
        //     $data = $bill_detail;
        //     DB::table('bill_detail')->insert($data);
        // }
    }
    
    public function SelectBill()
    {
        $bills = DB::table('bill')->get();
        return $bills;
    }

    public function SelectBillDetail()
    {
        $bill_details = DB::table('bill_detail')->get();
        return $bill_details;
    }
    
}
