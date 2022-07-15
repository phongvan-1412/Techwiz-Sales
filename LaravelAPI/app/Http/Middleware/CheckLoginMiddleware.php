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
        $admin = Admin::select()->where('emp_email', Session::get('emp_email'))
        ->where('emp_pwd', Session::get('emp_pwd'))->first();

        if($admin){
            return $next($request);
        }else{
            return redirect()->action([Signupin::class, 'getLoginForm']);
        }
    }
}
