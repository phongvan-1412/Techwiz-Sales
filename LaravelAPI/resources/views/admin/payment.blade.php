@extends('admin.layout.layout')
<!-- TOP BAR -->
@section('topbar')
    @include('admin.layout.topbar')
@endsection
<!-- MENU BAR -->
@section('menubar')
    @include('admin.layout.menubar')
@endsection

@section('bodycontent')
<div class="content">

<!-- Start Content-->
    <div class="container-fluid">
    
        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <h4 class="page-title"> Customer Information </h4>
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
                                New Payment
                            </button>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-striped mb-0">

                            <thead>
                                <tr>
                                    <th class="text-center">#</th>
                                    <th class="text-center">Payment</th>
                                    <th class="text-center">Code</th>
                                    <th class="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($payment as $pay)
                                    <tr>
                                        <td class="text-center">{{$i++}}</td>
                                        <td class="text-center">{{$pay->payment_mode_name}}</td>
                                        <td class="text-center">{{$pay->payment_mode_code}}</td>
                                        <td class="text-center">
                                            <form action="{{route('payment.destroy', $pay->payment_mode_id)}}" method="POST">
                                                <a href="{{route('payment.edit', $pay->payment_mode_id)}}" class="btn btn-info">Edit</a>
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-danger">Delete</button>
                                            </form>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div> <!-- end table-responsive-->
                </div> <!-- end card-box -->
            </div> <!-- end col -->
        </div>
        <!-- end row -->
    </div>
</div>

<div id="con-close-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
    <div class="modal-dialog">
        <div class="modal-content">
            <form action="{{route('payment.store')}}" method="POST">
                {{csrf_field()}}
                <div class="modal-header">
                    <h4 class="modal-title">New payment mode</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div class="modal-body p-4">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="field-1" class="control-label">Payment</label>
                                <input type="text" class="form-control" name="payment_mode_name" require>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="field-2" class="control-label">Payment code</label>
                                <input type="text" class="form-control" name="payment_mode_code" require>
                            </div>
                        </div>
                    </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                    <input type="submit" id="createpayment" class="btn btn-info waves-effect waves-light" value="Create">
                </div>
            </form>
        </div>
    </div>
</div>
@endsection