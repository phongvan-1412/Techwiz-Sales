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
                        <h3>Edit Product</h3>
                    </div>
                    <div class="col-md-6">
                        <a href="{{route('product.index')}}" class="btn btn-primary float-right">List category</a>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <form action="{{route('product.update', $product->product_id)}}" method="POST">
                {{csrf_field()}}
                @method('PUT')
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <strong>Product</strong>
                                <input class="form-control" value="{{$product->product_name}}" type="text" name="product_name">
                            </div>
                            <div class="form-group">
                                <strong>Category</strong>
                                <select name="category_name" class="form-control">
                                    @foreach ($category_names as $cate)
                                        <option value="{{$cate->category_name}}">
                                            {{$cate->category_name}}
                                        </option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="form-group">
                                <strong>Price</strong>
                                <input class="form-control" value="{{$product->product_price_per_unit}}" type="text" name="product_price_per_unit">
                            </div>
                            <div class="form-group">
                                <strong>Status</strong>
                                @if ($product->product_status == 1)
                                    <label class="switch">
                                        <input name="product_status" type="checkbox" checked>
                                        <span class="slider round"></span>
                                    </label>  
                                @else
                                    <label class="switch">
                                        <input name="product_status" type="checkbox" >
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