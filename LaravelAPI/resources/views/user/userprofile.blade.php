@extends('admin.layout.loginoutlayout')

<!-- CSS -->
@section('css')
<link rel="stylesheet" href="{{asset('css/profile.css')}}">
<link rel="stylesheet" href="{{asset('css/style-laptop.css')}}">
<link rel="stylesheet" href="{{asset('css/style-mobile.css')}}">
<link rel="stylesheet" href="{{asset('css/style-tablet.css')}}">
@endsection

@section('header')
    @include('user.Header')
@endsection

@section('footer')
    @include('user.Footer')
@endsection

@section('body')
<div class="container-xl px-4 mt-4">
    <hr class="mt-0 mb-4">
    <div class="row">
        <div class="col-xl-4">
            <form action="{{route('userprofile.store')}}" method="POST" enctype="multipart/form-data">
                {{csrf_field()}}
                <!-- Profile picture card-->
                <div class="card mb-2 mb-xl-0">
                    <div class="card-header">Profile Picture</div>
                    <div class="card-body text-center">
                        <!-- Profile picture image-->
                        @if (Session::get('customer_img_name') == null)
                            <img class="img-account-profile rounded-circle mb-2"
                            src="{{asset('avatar/1.jpg')}}" alt="">
                        @else
                            <img class="img-account-profile rounded-circle mb-2"
                                src="{{asset('avatar')}}/{{Session::get('customer_img_name')}}" alt="">
                        @endif
                        <!-- Profile picture help block-->
                        <div class="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                        <!-- Profile picture upload button-->
                        <input type="file" name="avatar">
                        <div class="card mt-3">
                            <span class="btn btn-primary" id="changepwd">Change Password</span>
                        </div>

                    </div>
                </div>

        </div>

        <!-- ACCOUNT DETAIL -->
        <div class="col-xl-8" id="account-detail">
            <!-- Account details card-->
            <div class="card mb-4">
                <div class="card-header">Account Details</div>
                <div class="card-body">
                    <!-- Form Group (username)-->
                    <div class="row gx-3 mb-3">
                        <div class="col-md-6">
                            <label class="small mb-1" for="position">Rank</label>
                            <input class="form-control" name="position" id="position" type="text" value="Member" disabled>
                        </div>
                        <div class="col-md-6">
                            <label class="small mb-1" for="position">Point</label>
                            <input class="form-control" name="point" id="point" type="text" value="0" disabled>
                        </div>
                    </div>

                    <!-- Form Row-->
                    <div class="mb-3">
                        <label class="small mb-1" for="fullname">Full name</label>
                        <input class="form-control" id="fullname" name="fullname" type="text"
                            placeholder="Enter your fullname" value="{{Session::get('customer_name')}}">
                    </div>

                    <!-- Form Group (organization name)-->
                    <div class="mb-3">
                        <label class="small mb-1" for="address">Address</label>
                        <input class="form-control" id="address" name="address" type="text"
                            placeholder="Enter your address" value="{{Session::get('customer_address')}}">
                    </div>
                    <!-- Form Group (email address)-->
                    <div class="mb-3">
                        <label class="small mb-1" for="email">Email address</label>
                        <input class="form-control" id="email" value="{{Session::get('customer_email')}}" disabled>
                    </div>
                    <!-- Form Row-->
                    <div class="row gx-3 mb-3">
                        <!-- Form Group (phone number)-->
                        <div class="col-md-6">
                            <label class="small mb-1" for="phonenumber">Phone number</label>
                            <input class="form-control" id="phonenumber" name="phonenumber" type="tel"
                                value="{{Session::get('customer_contact')}}">
                        </div>
                        <!-- Form Group (birthday)-->
                        <div class="col-md-6">
                            <label class="small mb-1" for="dateofbirth">Birthday</label>
                            <input class="form-control" id="dateofbirth" type="date" name="dateofbirth"
                                placeholder="Enter your birthday" value="{{Session::get('customer_dob')}}">
                        </div>
                    </div>
                        <!-- Save changes button-->
                        <button class="btn btn-primary" type="submit">Save changes</button>
                    </form>
                </div>
            </div>
        </div>
        <!-- CHANGE PASSWORD -->
        <div class="col-xl-8" id="changepwdform" style="display:none">
            <div class="card mb-4">
                <div class="card-header">Change Password</div>
                <div class="card-body">
                    @if(session('fail-msg'))
                    <div class="alert alert-danger">
                        {{session('fail-msg')}}
                    </div>
                    @endif
                    <form action="{{route('userprofile.update', Session::get('customer_id'))}}" method="POST">
                        @method('PUT')
                        {{csrf_field()}}
                        <div class="mb-3">
                            <label class="small mb-1" for="currentpwd">Current Password</label>
                            <input class="form-control" id="currentpwd" name="currentpwd" type="password">
                        </div>
                        <div class="mb-3">
                            <label class="small mb-1" for="newpwd">New Password</label>
                            <input class="form-control" id="newpwd" name="newpwd" type="password">
                        </div>
                        <div class=" mb-3">
                            <label class="small mb-1" for="confirmpwd">Confirm New Password</label>
                            <input class="form-control" id="confirmpwd" name="confirmpwd" onkeyup="checkpwd();"
                                type="password">
                            <div id="alert"></div>
                        </div>
                        <div>
                            <button class="btn btn-primary" id="changepwd-btn" type="submit" disabled>Change
                                Password</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        {{-- table Orders--}}
        <div class="col-xl-12 table-reponsive" id="orderdatatable" >
            <table class=" table table-striped md-0">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Shipping Code</th>
                        <th>Total Payment</th>
                        <th>Status</th>
                        <th>Order date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

@endsection
<!-- JAVASCRIPT -->
@section('scripts')
<script src="{{asset('js/profile.js')}}"></script>
@endsection
