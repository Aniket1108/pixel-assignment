


//Name validation
function validateName() {
    let name = document.getElementById("nameFull").value;
    if (name.length == 0) {
        document.getElementById("error").innerHTML = "Please Fill your first name and last name";
        return false;
    } if (!name.match(/^[a-zA-Z]{4,} [a-zA-Z]+$/)) {
        document.getElementById("error").innerHTML = "first name and last name";
        return false;
    } document.getElementById("error").innerHTML = "Done";
}

//Email validation
function validateEmail() {
    var email = document.getElementById('emailId').value;
    if (email.length == 0) {
        document.getElementById("error").innerHTML = "Please Enter Email ID";
        return false;
    } if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        document.getElementById("error").innerHTML = "must include @ and domain";
        return false;
    } document.getElementById("error").innerHTML = "Done";
    return true;
}

//Mobile Number validation
function validateNumber() {
    let number = document.getElementById("mobileNumber").value;
    let pheno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (number == "") {
        document.getElementById("error").innerHTML = "Please Enter 10 digit Phonr Number";
        return false;
    } if ((number.charAt(0) != 9) && (number.charAt(0) != 8) && (number.charAt(0) != 7)) {
        document.getElementById("error").innerHTML = "Number should start with 6, 7, 8, 9";
        return false;
    } if (number.match(pheno)) {
        document.getElementById("error").innerHTML = "Done";
        return false;
    } document.getElementById("error").innerHTML = "Please Enter 10 digit Phonr Number";
}

function validateForm() {
    if (!validateName() || !validateEmail() || !validateNumber()) {
    }
}



