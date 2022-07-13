$(document).ready(()=>{
    var check = true;
    $('#changepwd').click(function(){
        if(check){
            $('#account-detail').hide(100);
            $('#changepwdform').show(200);
            $('#changepwd').html("Change Profile");
            check = false;
        }else{
            $('#changepwdform').hide(200);
            $('#account-detail').show(100);
            $('#changepwd').html("Change Password");
            check = true;
        }
    })
   


})



function checkpwd() {
    var password = $("#newpwd").val();
    var confirmPassword = $("#confirmpwd").val();

    if (password == confirmPassword){
        $("#alert").html("Passwords match.").addClass('text-success').removeClass('text-danger');
        $("#changepwd-btn").prop('disabled', false);
    }else{
        $("#alert").html("Passwords do not match!").addClass('text-danger').removeClass('text-success');
    }
}
