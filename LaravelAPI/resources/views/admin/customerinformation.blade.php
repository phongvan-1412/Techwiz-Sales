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
                                New Customer
                            </button>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-striped mb-0">

                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Avatar</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Contact</th>
                                    <th>Date of Birth</th>
                                    <th>Address</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($customer as $cus)
                                    <tr>
                                        <td>{{$i++}}</td>
                                        <td>{{$cus->customer_img_name}}</td>
                                        <td>{{$cus->customer_name}}</td>
                                        <td>{{$cus->customer_email}}</td>
                                        <td>{{$cus->customer_contact}}</td>
                                        <td>{{$cus->customer_dob}}</td>
                                        <td>{{$cus->customer_address}}</td>
                                        <td>
                                            <form action="{{route('customerprofile.destroy', $cus->customer_id)}}" method="POST">
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
            <form action="{{route('customerprofile.store')}}" method="POST">
                {{csrf_field()}}
                <div class="modal-header">
                    <h4 class="modal-title">New Customer</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div class="modal-body p-4">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="field-1" class="control-label">Name</label>
                                <input type="text" class="form-control" name="customer_name" require>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="field-2" class="control-label">Email</label>
                                <input type="email" class="form-control" name="customer_email" require>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="field-3" class="control-label">Password</label>
                                <input type="password" class="form-control" id="pwd1" name="customer_pwd" require>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="field-4" class="control-label">Confirm Password</label>
                                <input type="password" onkeyup="check();" id="pwd2" class="form-control" require>
                            </div>
                            <div id="alert"></div>
                        </div>
                    </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                    <input type="submit" id="createcustomer" class="btn btn-info waves-effect waves-light" value="Create" disabled>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection

@section('scripts')
    <script>
            function check(){
                var pwd1 = $('#pwd1').val();
                var pwd2 = $('#pwd2').val();
                if(pwd1 == pwd2){
                    $('#alert').html('Passwords match').addClass('text-success').removeClass('text-danger');
                    $("#createcustomer").prop('disabled', false); 

                }else{
                    $('#alert').html('Passwords not match').addClass('text-danger').removeClass('text-success');
                }
            }
    </script>
@endsection