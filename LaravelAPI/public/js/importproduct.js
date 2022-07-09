function sum(){
    var quantity = $('#quantity').val();
    var price = $('#price').val();
    var total = new Intl.NumberFormat().format(quantity * price);
    return $("#totalpayment").val(total);
}
