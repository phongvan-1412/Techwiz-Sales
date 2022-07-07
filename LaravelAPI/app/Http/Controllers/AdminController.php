<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;

class AdminController extends Controller
{

    public function index()
    {   
        $admin = Admin::paginate(6);
        return view('admin.admininformation', compact('admin'))->with('i', (request()->input('page',1)-1)*5);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $admin = new Admin;
        $admin->emp_name = $request->emp_name;
        $admin->emp_email = $request->emp_email;
        $admin->emp_pwd = md5($request->emp_pwd);
        $admin->save();

        return redirect()->route('adminprofile.index')->with('msg', 'New admin account created');
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($emp_id)
    {
        $admin = Admin::find($emp_id);

        $admin->delete();
        return redirect()->route('adminprofile.index')->with('msg', 'Deleted Successfully');
    }
}

