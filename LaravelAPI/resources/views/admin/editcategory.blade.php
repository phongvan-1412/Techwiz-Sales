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

@section('bodycontent')
    <div class="container mt-3">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-md-6">
                        <h3>Edit Category</h3>
                    </div>
                    <div class="col-md-6">
                        <a href="{{route('category.index')}}" class="btn btn-primary float-right">List category</a>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <form action="{{route('category.update', $category->category_id)}}" method="POST">
                {{csrf_field()}}
                @method('PUT')
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <strong>Category</strong>
                                <input class="form-control" value="{{$category->category_name}}" type="text" name="category_name">
                            </div>
                            <div class="form-group">
                                <strong>Root</strong>
                                <select name="category_root" class="form-control">
                                    @foreach ($category_root_name as $cate)
                                        <option value="{{$cate->category_name}}">
                                            {{$cate->category_name}}
                                        </option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="form-group">
                                <strong>Status</strong>
                                @if ($category->category_status == 1)
                                    <label class="switch">
                                        <input name="category_status" type="checkbox" checked>
                                        <span class="slider round"></span>
                                    </label>  
                                @else
                                    <label class="switch">
                                        <input name="category_status" type="checkbox" >
                                        <span class="slider round"></span>
                                    </label>  
                                @endif
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary mt-2">Update</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection