var url = window.location.href;

if(url=="https://www.supremenewyork.com/checkout"){
    var full_name = "John Doe";
    var email = "john@gmail";
    var phone = "123123123";
    var address = "Oregon";
    var city = "Corvallis";
    var zip = "97330";

    document.getElementById("order_billing_name").value = full_name;
    document.getElementById("order_email").value = email;
    document.getElementById("order_tel").value = phone;
    document.getElementById("order_billing_address").value = address;
    document.getElementById("order_billing_city").value = city;
    document.getElementById("order_billing_zip").value = zip;
    document.getElementsByClassName("iCheck-helper")[1].click();
    document.getElementsByName("commit")[0].click();
}
