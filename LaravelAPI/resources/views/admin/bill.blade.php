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
<div class="content mt-4">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <div class="card-box">
                    <h4 class="header-title mb-3">BILL</h4>

                    <div class="table-responsive">
                        <table class="table table-borderless mb-0">
                            <thead class="thead-light">
                            <tr>
                                <th>#</th>
                                <th>Bill ID</th>
                                <th>Date</th>
                                <th>Total payment</th>
                                <th>Customer ID</th>
                                <th>Employee</th>
                                <th>Payment</th>
                            </tr>
                            </thead>
                            <span hidden>{{$i=1}}</span>
                            <tbody>
                            @foreach($bills as $bill)
                                <tr>
                                    <th>{{$i++}}</th>
                                    <td>{{$bill->bill_id}}</td>
                                    <td>{{$bill->bill_date}}</td>
                                    <td>{{$bill->customer_id}}</td>
                                    <td>{{$bill->emp_name}}</td>
                                    <td>{{$bill->payment_mode_name}}</td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                    </div> <!-- end table-responsive-->

                </div> <!-- end card-box -->
            </div> <!-- end col -->
            <div class="col-lg-12">
                <div class="card-box">
                    <h4 class="header-title mb-3">BILL DETAIL</h4>

                    <div class="table-responsive">
                        <table class="table table-borderless mb-0">
                            <thead class="thead-light">
                            <tr>
                                <th>#</th>
                                <th>Bill ID</th>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total</th>
                            </tr>
                            </thead>
                            <span hidden>{{$i=1}}</span>
                            <tbody>
                            @foreach ($bill_details as $bill_detail)
                            <tr>
                                <th>{{$i++}}</th>
                                <td>{{$bill_detail->bill_id}}</td>
                                <td>{{$bill_detail->product_name}}</td>
                                <td>{{$bill_detail->bill_detail_quantity}}</td>
                                <td>{{$bill_detail->price_per_unit}}</td>
                                <td>{{$bill_detail->bill_detail_total_payment}}</td>
                            </tr>
                            @endforeach
                            </tbody>
                        </table>
                    </div> <!-- end table-responsive-->

                </div> <!-- end card-box -->
            </div>
        </div>
    </div>
</div>
@endsection