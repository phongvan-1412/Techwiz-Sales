<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>VNHP Grocery</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="A fully featured admin theme which can be used to build CRM, CMS, etc." name="description">
    <meta content="Coderthemes" name="author">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!-- plugin css -->
    <link href="{{asset('libs/jquery-vectormap/jquery-jvectormap-1.2.2.css')}}" rel="stylesheet" type="text/css">
    <!-- App css -->
    <link href="{{asset('css/bootstrap.min.css')}}" rel="stylesheet" type="text/css">
    <link href="{{asset('css/icons.min.css')}}" rel="stylesheet" type="text/css">
    <link href="{{asset('css/app.min.css')}}" rel="stylesheet" type="text/css">

    @yield('css')
</head>

<body>

    <!-- Begin page -->
    <div id="wrapper">
        @yield('topbar')
        <div class="left-side-menu">
            @yield('menubar')
        </div>
        <div class="content-page">
            @yield('bodycontent')
            <!-- Footer Start -->
            <footer class="footer">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6">
                            2022 &copy; Copyright by <a href="">VNHP Grocery</a>
                        </div>
                        <div class="col-md-6">
                            <div class="text-md-right footer-links d-none d-sm-block">
                                <a href="javascript:void(0);">About Us</a>
                                <a href="javascript:void(0);">Help</a>
                                <a href="javascript:void(0);">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <!-- end Footer -->
        </div>

        <!-- ============================================================== -->
        <!-- End Page content -->
        <!-- ============================================================== -->

    </div>
    <!-- END wrapper -->


    <!-- Vendor js -->
    <script src="{{asset('js\vendor.min.js')}}"></script>
    <!-- Third Party js-->
    <script src="{{asset('libs\peity\jquery.peity.min.js')}}"></script>
    <script src="{{asset('libs\apexcharts\apexcharts.min.js')}}"></script>
    <script src="{{asset('libs\jquery-vectormap\jquery-jvectormap-1.2.2.min.js')}}"></script>
    <script src="{{asset('libs\jquery-vectormap\jquery-jvectormap-us-merc-en.js')}}"></script>
    <!-- Dashboard init -->
    <script src="{{asset('js\pages\dashboard-1.init.js')}}"></script>
    <!-- App js -->
    <script src="{{asset('js\app.min.js')}}"></script>
    @yield('jquery')
</body>
    @yield('scripts')

