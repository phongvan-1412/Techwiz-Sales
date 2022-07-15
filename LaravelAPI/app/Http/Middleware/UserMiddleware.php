<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Http\Controllers\SignupSigninController as Signupin;

use App\Models\Customer;
use Session;

class UserMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $user = Customer::select()->where('customer_email', Session::get('customer_email'))
        ->where('customer_pwd', Session::get('customer_pwd'))->first();

        if($user){
            return $next($request);
        }else{
            return redirect()->action([Signupin::class, 'getLoginForm']);
        }
    }
}
