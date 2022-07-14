@extends('admin.layout.loginoutlayout')


<!-- CSS -->
@section('css')
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<link rel="stylesheet" href="{{asset('css/login-form.css')}}">
@endsection

<!-- LOGIN-FORM -->
@section('body')
<!------ Include the above in your HEAD tag ---------->
<section class="login-block" id="login-block">
    <div class="col d-flex justify-content-center">
        <div class="row form-reset">
            <div class="col-md-12 login-sec">
                <div class="form-login">
                    <h2 class="text-center">Reset Password</h2>
                    <form method="POST" action="/forget-password" class="resetpwd-form">
                        {{csrf_field()}}  
                        <div class="container-fluid-i">             
                            <div class="col-md-12 form-group">
                                <label for="exampleInputEmail1" class="text-uppercase">Email</label>
                                <input type="text" class="form-control" name="email">
                                @if (session('fail-msg'))
                                    <small class="help-block">
                                        {{session('fail-msg')}}
                                        <small> 
                                @endif
                            </div>
                            <div class="col-md-12 form-submit">
                                <button type="submit" class="btn btn-primary float-right ">Send mail</button>
                            </div> 
                        </div> 
                    </form>
                </div>
                <div class="copy-text">Created with <i class="fa fa-heart"></i> by BuffDog</div>
            </div>
        </div>
    </div>
</section>


@endsection