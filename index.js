// Error Message String
const error_required = "This field is required";
const invalid_email = "Please enter a valid email address";
const error_required_query = "Please select a query type";
const error_required_consent = "To submit this form, please consent to being contacted";

const form = document.getElementById("form")

function validateform(){
    let sumbitcondition = true;
    
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let query_type_radio = document.getElementsByName("QueryType");
    let message = document.getElementById("message").value;
    let consent = document.getElementById("consent");

    // reset all error message
    reset_error();

    // first name
    if(firstname == ""){
        document.getElementById("firstnameerror").innerHTML = error_required;
        document.getElementById("firstname").classList.add("error_border");
        sumbitcondition = false;
    }
    // last name
    if(lastname == ""){
        document.getElementById("lastnameerror").innerHTML = error_required;
        document.getElementById("lastname").classList.add("error_border");
        sumbitcondition = false;
    }
    // email
    if(email == ""){    // empty email
        document.getElementById("emailerror").innerHTML = error_required;
        document.getElementById("email").classList.add("error_border");
        sumbitcondition = false;
    }
    else if(email.indexOf("@") == -1){  // not empty email but does not contain @
        document.getElementById("emailerror").innerHTML = invalid_email;
        document.getElementById("email").classList.add("error_border");
        sumbitcondition = false;
    }
    // query_type
    if( !query_type_radio[0].checked && !query_type_radio[1].checked ){
        document.getElementById("queryerror").innerHTML = error_required_query;
        sumbitcondition = false;
    }
    // message
    if(message == ""){
        document.getElementById("messageerror").innerHTML = error_required;
        document.getElementById("message").classList.add("error_border");
        sumbitcondition = false;
    }
    // consent
    if(!consent.checked){
        document.getElementById("consenterror").innerHTML = error_required_consent;
        sumbitcondition = false;
    }

    return sumbitcondition;
}

function reset_error(){
    document.getElementById("firstnameerror").innerHTML = "";
    document.getElementById("lastnameerror").innerHTML = "";
    document.getElementById("emailerror").innerHTML = "";
    document.getElementById("queryerror").innerHTML = "";
    document.getElementById("messageerror").innerHTML = "";
    document.getElementById("consenterror").innerHTML = "";

    document.getElementById("firstname").classList.remove("error_border");
    document.getElementById("lastname").classList.remove("error_border");
    document.getElementById("email").classList.remove("error_border");
    document.getElementById("message").classList.remove("error_border");
}



