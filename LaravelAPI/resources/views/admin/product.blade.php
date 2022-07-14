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
    <link href="{{ asset('libs\datatables\dataTables.bootstrap4.css') }}" rel="stylesheet" type="text/css">
    <link href="{{ asset('libs\datatables\responsive.bootstrap4.css') }}" rel="stylesheet" type="text/css">
    <link href="{{ asset('libs\datatables\buttons.bootstrap4.css') }}" rel="stylesheet" type="text/css">
    <link href="{{ asset('libs\datatables\select.bootstrap4.css') }}" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="{{asset('css/category.css')}}">
@endsection
@section('jquery')
    <script src="{{ asset('libs\datatables\jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('libs\datatables\dataTables.bootstrap4.js') }}"></script>
    <script src="{{ asset('libs\datatables\dataTables.responsive.min.js') }}"></script>
    <script src="{{ asset('libs\datatables\responsive.bootstrap4.min.js') }}"></script>
    <script src="{{ asset('libs\datatables\dataTables.buttons.min.js') }}"></script>
    <script src="{{ asset('libs\datatables\buttons.bootstrap4.min.js') }}"></script>
    <script src="{{ asset('libs\datatables\buttons.html5.min.js') }}"></script>
    <script src="{{ asset('libs\datatables\buttons.flash.min.js') }}"></script>
    <script src="{{ asset('libs\datatables\buttons.print.min.js') }}"></script>
    <script src="{{ asset('libs\datatables\dataTables.keyTable.min.js') }}"></script>
    <script src="{{ asset('libs\datatables\dataTables.select.min.js') }}"></script>
    <script src="{{ asset('libs\pdfmake\pdfmake.min.js') }}"></script>
    <script src="{{ asset('libs\pdfmake\vfs_fonts.js') }}"></script>
    <script src="{{ asset('js\pages\datatables.init.js') }}"></script>
@endsection
@section('bodycontent')
    <div class="content">
        <div class="container-fluid">

            <div class="row">
                <div class="col-md-6">
                    <div class="page-title-box">
                        <h4 class="page-title">Product Datatable</h4>
                    </div>
                </div>
                <div class="col-md-6 mt-3">
                    <button class="btn btn-success waves-effect waves-light float-right"
                        data-toggle="modal" data-target="#con-close-modal">
                        New Product
                    </button>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-12 float-start">
                                    @if (Session::has('succ-msg'))
                                        <div class="alert alert-success">
                                            {{ Session::get('succ-msg') }}
                                        </div>
                                    @endif
                                    @if (Session::has('fail-msg'))
                                        <div class="alert alert-danger">
                                            {{ Session::get('fail-msg') }}
                                        </div>
                                    @endif
                                </div>
                            </div>

                            <table id="basic-datatable" class="table dt-responsive nowrap">
                                <thead>
                                    <tr>
                                        <th class="text-center"></th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Category</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                        <th>Information</th>
                                    </tr>
                                </thead>
                                <span hidden>{{ $i = 1 }}</span>

                                <tbody>
                                    @foreach ($products as $pro)
                                        <tr>
                                            <td class="text-center">{{ $i++ }}</td>
                                            <td><img id="imgproduct" src="{{asset('ProductImage')}}/{{$pro->product_img_name}}"></td>
                                            <td>{{ $pro->product_name }}</td>
                                            <td>{{ $pro->category_name }}</td>
                                            <td>{{ $pro->product_quantity }}</td>
                                            <td>{{ $pro->product_price_per_unit }}</td>

                                            @if ($pro->product_status == 1)
                                                <td>
                                                    <label class="switch">
                                                        <input name="category_status" type="checkbox" checked>
                                                        <span class="slider round"></span>
                                                    </label>
                                                </td>
                                            @else
                                                <td>
                                                    <label class="switch">
                                                        <input name="category_status" type="checkbox">
                                                        <span class="slider round"></span>
                                                    </label>
                                                </td>
                                            @endif

                                            <td>
                                                <form action="{{route('product.destroy', $pro->product_id)}}" method="POST">
                                                    <a href="{{route('product.edit', $pro->product_id)}}" class="btn btn-info">Edit</a>
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit" class="btn btn-danger">Delete</button>
                                                </form>
                                            </td>
                                            <td>{{ $pro->product_information}}</td>
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
                <form action="{{route('product.store')}}" method="POST" enctype="multipart/form-data">
                    {{csrf_field()}}
                    <div class="modal-header">
                        <h4 class="modal-title">New Product</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div class="modal-body p-4">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="control-label">Product</label>
                                    <input type="text" class="form-control" name="product_name" require>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="control-label">Category</label>
                                    <select class="form-control" name="category_name" id="category_name">
                                        @foreach ($categories as $category)
                                            <option value="{{$category->category_name}}">
                                                {{$category->category_name}}
                                            </option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="field-1" class="control-label">Price</label>
                                    <input type="text" class="form-control" name="product_price_per_unit" require>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="field-1" class="control-label">Image</label>
                                    <input type="file" class="form-control-file" name="product_img_name" require>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="product_information" class="control-label">Information</label>
                                    <textarea name="product_information" class="form-control" id="product_information" cols="30" rows="10"></textarea>
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
