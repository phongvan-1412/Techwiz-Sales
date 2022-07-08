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
    <div class="container">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-md-6">
                        <h3>Edit Payment</h3>
                    </div>
                    <div class="col-md-6">
                        <a href="{{route('payment.index')}}" class="btn btn-primary float-right">List payment</a>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <form action="{{route('payment.update', $payment->payment_mode_id)}}" method="POST">
                {{csrf_field()}}
                @method('PUT')
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <strong>Payment name</strong>
                                <input class="form-control" value="{{$payment->payment_mode_name}}" type="text" name="payment_mode_name">
                            </div>
                            <div class="form-group">
                                <strong>Payment code</strong>
                                <input class="form-control" value="{{$payment->payment_mode_code}}" type="text" name="payment_mode_code">
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