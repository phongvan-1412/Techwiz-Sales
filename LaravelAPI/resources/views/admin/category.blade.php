@extends('admin.layout.layout')
<!-- TOP BAR -->
@section('topbar')
    @include('admin.layout.topbar')
@endsection
<!-- MENU BAR -->
@section('menubar')
    @include('admin.layout.menubar')
@endsection

<!-- CSS -->
@section('css')
    <link rel="stylesheet" href="{{asset('css/category.css')}}">
@endsection

<!-- BODY CONTENT -->
@section('bodycontent')
<div class="content">

<!-- Start Content-->
    <div class="container-fluid">
    
        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <h4 class="page-title"> Category </h4>
                </div>
            </div>
        </div>    

        <div class="row">
            <div class="col-lg-12">
                <div class="card-box">
                    <div class="row">
                        <div class="col-md-11 float-start">
                           @if (Session::has('succ-msg'))
                                <div class="alert alert-success">
                                    {{Session::get('succ-msg')}}
                                </div>
                            @endif                           
                            @if (Session::has('fail-msg'))
                                <div class="alert alert-danger">
                                    {{Session::get('fail-msg')}}
                                </div>
                            @endif
                        </div>
                        <div class="col-md-1">
                            <button class="btn btn-success waves-effect waves-light float-right mb-2" data-toggle="modal" data-target="#con-close-modal">
                                New Category
                            </button>
                        </div>
                    </div>


                    <div class="table-responsive">
                        <table class="table table-striped mb-0">
                            <thead>
                                <tr>
                                    <th class="text-center">#</th>
                                    <th class="text-center">Category</th>
                                    <th class="text-center">Root</th>
                                    <th class="text-center">Status</th>
                                    <th class="text-center">Action</th>
                                </tr>
                            </thead>
                            <span hidden>{{$i=1}}</span>
                            <tbody>
                                @foreach ($categories as $cate)
                                    <tr>
                                        <td class="text-center">{{$i++}}</td>
                                        <td class="text-center">{{$cate->category_name}}</td>
                                        <td class="text-center">{{$cate->category_root_name}}</td>
                                        @if ($cate->category_status == 1)
                                            <td class="text-center">
                                                <label class="switch">
                                                    <input name="category_status" type="checkbox" checked >
                                                    <span class="slider round"></span>
                                                </label>  
                                            </td>
                                        @else
                                            <td class="text-center">
                                                <label class="switch">
                                                    <input name="category_status" type="checkbox" >
                                                    <span class="slider round"></span>
                                                </label>  
                                            </td>
                                        @endif
                                        <td class="text-center">
                                            <form action="{{route('category.destroy', $cate->category_id)}}" method="POST">
                                                <a href="{{route('category.edit', $cate->category_id)}}" class="btn btn-info">Edit</a>
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-danger">Delete</button>
                                            </form>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div> 
                </div> 
            </div> 
        </div>
    </div>
</div>

<div id="con-close-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
    <div class="modal-dialog">
        <div class="modal-content">
            <form action="{{route('category.store')}}" method="POST">
                {{csrf_field()}}
                <div class="modal-header">
                    <h4 class="modal-title">New Category</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div class="modal-body p-4">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="field-1" class="control-label">Category</label>
                                <input type="text" class="form-control" name="category_name" require>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="field-2" class="control-label">Root</label>
                                <select class="form-control" name="category_root" id="category_root">
                                    @foreach ($category_roots as $category_root)
                                        <option value="{{$category_root->category_name}}">
                                            {{$category_root->category_name}}
                                        </option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                    </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                    <input type="submit" id="createadmin" class="btn btn-info waves-effect waves-light" value="Create">
                </div>
            </form>
        </div>
    </div>
</div>
@endsection