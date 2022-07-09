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

<!-- JQUERY -->
@section('jquery')
    <script src="{{asset('libs/rwd-table/rwd-table.min.js')}}"></script>
    <script src="{{asset('js/pages/responsive-table.init.js')}}"></script>
@endsection

<!-- BODY CONTENT -->
@section('bodycontent')
<div class="content">
<div class="container-fluid">
    <div class="row">   
        <div class="col-md-6">
            <div class="page-title-box">
                <h4 class="page-title">GOODS RECEIPT</h4>
            </div>
        </div>
        <div class="col-md-6 mt-3">
            <button class="btn btn-success waves-effect waves-light float-right"
                data-toggle="modal" data-target="#con-close-modal">
                New Receipt
            </button>
        </div>
    </div>   
    <!-- end page title --> 

    <div class="row">
        <div class="col-12">
            <div class="card-box">
                <div class="responsive-table-plugin">
                    <div class="table-rep-plugin">
                        <div class="table-responsive" data-pattern="priority-columns">
                            <table id="tech-companies-1" class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th data-priority="1">Quantity</th>
                                        <th data-priority="3">Cost input</th>
                                        <th data-priority="1">Date import</th>
                                        <th data-priority="3">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($import as $imp)
                                    <tr>
                                        <td>{{$imp->product_name}}</td>
                                        <td>{{$imp->import_product_quantity}}</td>
                                        <td>{{$imp->import_product_price_per_unit}}</td>
                                        <td>{{$imp->import_product_date}}</td>
                                        <td>{{$imp->import_product_total_payment}}</td>
                                    </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div> <!-- end .table-responsive -->

                    </div> <!-- end .table-rep-plugin-->
                </div> <!-- end .responsive-table-plugin-->
            </div> <!-- end card-box -->
        </div> <!-- end col -->
    </div>
    <!-- end row -->  
</div> <!-- container -->
</div> <!-- content -->

<div id="con-close-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
        <div class="modal-dialog">
            <div class="modal-content">
                <form action="{{route('import.store')}}" method="POST">
                    {{csrf_field()}}
                    <div class="modal-header">
                        <h4 class="modal-title">New Receipt</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div class="modal-body p-4">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="control-label">Product</label>
                                    <select class="form-control" name="product_name" id="product_name">
                                        @foreach($product_names as $product_name)
                                            <option value="{{$product_name->product_name}}">
                                                {{$product_name->product_name}}
                                            </option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label">Quantity</label>
                                    <input type="number" id="quantity" onchange="sum()" step="100" class="form-control" name="import_product_quantity" require>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="field-1" class="control-label">Price</label>
                                    <input type="number" id="price" onchange="sum()" class="form-control" name="import_product_price_per_unit" require>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="field-1" class="control-label">Total</label>
                                    <input type="decimal" id="totalpayment" class="form-control" disabled>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="import_product_date" class="control-label">Date</label>
                                    <input type="date" name="import_product_date" class="form-control" require>
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

<!-- SCRIPT -->
@section('scripts')
    <script src="{{asset('js\importproduct.js')}}"></script>
@endsection