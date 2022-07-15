
<!-- <div class="header-menu">
    <header class="menu">
            <div class="logo-thumbnail">
                <a href="/" >
                    <img src={{asset("../../img/Header/logo.jpg")}} class="logo" />
                </a>
            </div>

            <div class="float-right">
                @if (Session::get('customer_id'))
                    <strong class="text-light">Hi {{Session::get('customer_name')}}</strong>
                    <a class="" href="/logout">Log Out</a>
                @else
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                @endif
            </div>
    </header>
</div> -->
<!-- <div class="container-xl px-4 2">
    <div class="row">
        <div class="col-md-6 float-left">
            <a href="/" >
                <img src={{asset("../../img/Header/logo.jpg")}} class="logo" />
            </a>
        </div>

        <div class="col-md-6 text-align-right">
            @if (Session::get('customer_id'))
                <strong class="text-light">Hi {{Session::get('customer_name')}}</strong>
                <a class="" href="/logout">Log Out</a>
            @else
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            @endif
        </div>
    </div>
</div> -->
<!-- Navigation -->
<nav class="navbar navbar-expand-lg navbar-light fixed-top" style="background-color: rgb(0,0,0,0.7);">
  <div class="container">
        <div class="col-md-6 pl-0">
            <a href="/" class="float-left">
                <img src="{{asset('img/logo.jpg')}}" style="width: 55px; height: 50px; border-radius: 1000px"/>
            </a>
        </div>
        <div class="col-md-6">
            @if (Session::get('customer_id'))
                <a class="ml-3 mr-3 float-right text-light" style="text-decoration: none" href="/logout">Log Out</a>
                <strong class="text-light float-right">Hi {{Session::get('customer_name')}}</strong> &nbsp
            @else
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            @endif
        </div>
  </div>
</nav>
<style>
    /* .navbar{
        ;
    } */
</style>
