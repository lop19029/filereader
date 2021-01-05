

function formValidator(){
    /*Checks if any of the form fields is empty, if so, calls displayAlert() and returns false.
    Also sets focus to the first empty field.
    Otherwise, returns true.*/

    //Declare variables and set values
    var apr, term, amount, alert;
    alert = false;
    apr = document.getElementById("apr");
    term = document.getElementById("term");
    amount = document.getElementById("amount");

    //Check for empty fields
    if(apr.value.length === 0){
        alert = true;
        displayAlert(alert);
        document.getElementById("apr").focus();
        return
    }
    if(term.value.length === 0){
        alert = true;
        displayAlert(alert);
        document.getElementById("term").focus();
        return
    }
    if(amount.value.length === 0){
        alert = true;
        displayAlert(alert);
        document.getElementById("amount").focus();
        return
    }
    else{
        displayAlert(alert);
        return
    }
}

function fieldValidator(){
    /*Takes the value from apr and Loan term, and checks if they fill the input requirements for each of them
    If something is wrong, sets RUN_CALCULATION = false and wipes the payment field
    If they are okay, sets RUN_CALCULATION = true and run formValidator() */
    
    var apr, term;
    apr = parseFloat(document.getElementById("apr").value);
    term = parseInt(document.getElementById("term").value);
   
    if (apr <= 0 || apr > 25.00){
        document.getElementById("aprAlert").innerHTML = "*APR value must be higher than 0 and lower or equal 25.00";
        document.getElementById("apr").focus();
        document.getElementById("payment").value = ""
    }
    if(term <= 0 || term > 40){
        document.getElementById("termAlert").innerHTML = "*Loan term must be higher that 0 and lower or equal 40 years";
        document.getElementById("term").focus();
        document.getElementById("payment").value = ""
    }
    if(apr > 0 & apr <= 25.00) {
        document.getElementById("aprAlert").innerHTML = "";
    }
    if(term > 0 & term <= 40){
        document.getElementById("termAlert").innerHTML = "";
    }
    if((term > 0 & term <= 40) & (apr >= 0 & apr <= 25.00)){ 
        formValidator()       
}

}

function displayAlert(alert){
    /*Receives an alert boolean value, if true, displays an alert message
    at the top of the calculator.
    Otherwise, sets the alert message to an empty string*/
    if(alert === true){
        document.getElementById("alert").innerHTML = "*All the calculator fields must be filled";
        document.getElementById("payment").value = ""
    }
    else{
        document.getElementById("alert").innerHTML = "";
    }
}

