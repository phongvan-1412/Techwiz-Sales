<div style="width: 600px; margin: 0 auto">
    <div style="text-align:center">
        <h2>Hi {{$customer->customer_name}}</h2>
        <p>You recently requested to reset the password for your {{$customer->customer_name}} account. Click the button below to proceed.</p>
        <p>
            <a href="{{route('getPass', ['customer'=>$customer->customer_id, 'token'=>$customer->token])}}" style="display:inline-block; background: green; color: #fff; padding: 7px 25px; font-weight:bold">Reset password</a>
        </p>
        <p>If you did not request a password reset, please ignore this email or reply to let us know. This password reset link is only valid for the next 30 minutes.</p>

    </div>
    <h3>Thanks, the VNHP team</h3>
</div>

