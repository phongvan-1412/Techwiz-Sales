<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\SignupSigninController as Signupin;
use Illuminate\Support\Collection;
use App\Models\Admin;
use Session;


class CheckLoginMiddleware
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
        function checkrequest($requesturl){
            $adminUrl = new Collection();
            $adminUrl = collect(["/dashboard","/adminprofile","/customerprofile","/payment","/payment/edit/{Session::get('emp_id')}",
            "/category","/product","/import","/bill","profile"]);
            $check = false;
            foreach ($adminUrl as $isUrl){
                if($requesturl == $isUrl){
                    $check = true;
                }
            };
            return $check;
        
        }
        $admin = Admin::select()->where('emp_email', Session::get('emp_email'))
        ->where('emp_pwd', Session::get('emp_pwd'))->first();

        if($admin){
            $currentUrl = $request->getPathInfo();
            if(checkrequest($currentUrl)==true){
                return $next($request);
            }else{
                return redirect()->action([Signupin::class, 'getLoginForm']);
            }
        }else{
            return redirect()->action([Signupin::class, 'getLoginForm']);
        }
    }
}
