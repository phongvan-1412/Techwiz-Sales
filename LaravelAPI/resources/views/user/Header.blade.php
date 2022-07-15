
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
<nav class="navbar navbar-expand-lg navbar-light bg-secondary fixed-top" style="transparent:0.1">
  <div class="container">
        <div class="col-md-6 float-left">
            <a href="/" >
                <img src={{asset("../../img/Header/logo.jpg")}} class="logo" />
            </a>
        </div>

        <div class="col-md-6 float-right">
            @if (Session::get('customer_id'))
                <strong class="text-light">Hi {{Session::get('customer_name')}}</strong>
                <a class="" href="/logout">Log Out</a>
            @else
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            @endif
        </div>
  </div>
</nav>

