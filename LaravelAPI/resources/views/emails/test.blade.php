<div style="width: 600px; margin: 0 auto">
    <div style="text-align:center">
        <h2>Xin chào {{$register->customer_name}}</h2>
        <p>Bạn đã đăng kí tài khoản tại hệ thống chúng tôi</p>
        <p>Để có thể tiếp tục sử dụng các dịch vụ bạn vui lòng nhấn vào nút kích hoạt bên dưới để kích hoạt tài khoản</p>
        <p>
            <a href="{{route('customer.actived', ['customer'=>$register->customer_id, 'token'=>$register->token])}}" style="display:inline-block; background: green; color: #fff; padding: 7px 25px; font-weight:bold">Xác thực tài khoản</a>
        </p>
    </div>
    <h3>From Lip Admin</h3>
</div>

