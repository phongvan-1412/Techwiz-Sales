function checkpwd() {
    var password = $("#pwd1").val();
    var confirmPassword = $("#pwd2").val();
 
    if (password == confirmPassword){
        $("#alert").html("Passwords match.").addClass('text-success').removeClass('text-danger');
        $("#resetpwd").prop('disabled', false); 
    }else{
        $("#alert").html("Passwords do not match!").addClass('text-danger').removeClass('text-success');
    }
}