@extends('admin.layout.loginoutlayout')

@section('header')

@endsection
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
<section class="login-block">
    <img >
    <div class="container">
        <div class="row">
            <div class="col-md-4 login-sec">
                @if(count($errors) > 0)
                    <div class="alert alert-danger mb-0 mt-0">
                        @foreach($errors->all() as $err)
                            {{$err}} <br>
                        @endforeach
                    </div>
                @endif
                @if(session('msg'))
                    <div class="alert alert-danger mb-0 mt-0">
                        {{session('msg')}}
                    </div>
                @endif
                @if(session('succ-msg'))
                    <div class="alert alert-success mb-0 mt-0">
                        {{session('succ-msg')}}
                    </div>
                @endif
                
                <div class="form-login">
                    <h2 class="text-center">Login</h2>
                    <form method="POST" action="/login/check" class="login-form">
                        {{csrf_field()}}
                        <div class="form-group">
                            <label for="exampleInputEmail1" class="text-uppercase">Email</label>
                            <input type="text" class="form-control" name="email">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1" class="text-uppercase">Password</label>
                            <input type="password" class="form-control" name="pwd">
                        </div>


                        <div class="get-form-signup">
                            <span>Don't have an account? <a href="/register">Sign up.</a> </span>
                            <button type="submit" class="btn btn-primary float-right">Submit</button>
                        </div>

                    </form>
                </div>
                <div class="copy-text">Created with <i class="fa fa-heart"></i> by BuffDog</div>
            </div>
            <div class="col-md-8 banner-sec pr-0">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="3000">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                            <img class="d-block img-fluid" src="{{asset('img/pic1.jpg')}}" alt="First slide">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block img-fluid" src="{{asset('img/pic2.jpg')}}" alt="First slide">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block img-fluid" src="{{asset('img/pic3.jpg')}}" alt="First slide">
                        </div>
                    </div>

                </div>
            </div>
        </div>
</section>


@endsection