<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    @yield('css')
    <link href="{{asset('css/sb-admin-2.min.css')}}" rel="stylesheet">

</head>
<body>
    <div class="container.d-none">
        <div id="header" class="row">
            @yield('header')
        </div>
        <div class="row" id="container-profile" >
            @yield('body')
        </div>
        <div id="footer">
            @yield('footer')
        </div>
    </div>

<script src="{{asset('js/jquery-3.6.0.min.js')}}"></script>
<script src="{{asset('js/bootstrap.js')}}"></script>
@yield('scripts')
</body>
</html>