<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CustomerApi extends Controller
{
    public function CustomerLoginInfo()
    {
        $data = $request->session()->all();
        return $data;
    }
}
