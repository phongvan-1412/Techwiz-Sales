<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Payment;

class PaymentController extends Controller
{
    public function index(){
        $payment = Payment::paginate(10);
        return view('admin.payment', compact('payment'))->with('i', (request()->input('page',1)-1)*5);
    }

    public function store(Request $request){
        $payment_mode_name = $request->payment_mode_name;
        $isExist = Payment::select()->where('payment_mode_name', $payment_mode_name)->exists();

        if($isExist){
            return redirect()->route('payment.index')->with('fail-msg', 'Payment is already exist');
        }else{
            Payment::create($request->all());
            return redirect()->route('payment.index')->with('succ-msg', 'Add payment successfully');
        }
    }


    public function edit(Payment $payment){
        return view('admin.editpayment', compact('payment'));
    }

    public function update(Request $request, Payment $payment){
        $payment->update($request->all());
        return redirect()->route('payment.index')->with('succ-msg', 'Updated Successfully');
    }

    public function destroy($payment_mode_id){
        $payment = Payment::find($payment_mode_id);
        $payment->delete();
        return redirect()->route('payment.index')->with('succ-msg', 'Deleted Successfully');
    }
}
