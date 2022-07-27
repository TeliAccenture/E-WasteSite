var fields = {}

document.addEventListener("DOMContentLoaded", function() {
    fields.firstname = document.getElementById('firstname');
    fields.surname = document.getElementById('surname');
    fields.pronouns = document.getElementById('pronouns');
    fields.telephoneNumber = document.getElementById('telephoneNumber');
    fields.email = document.getElementById('email');
    fields.enquiry = document.getElementById('enquiry');
   })

function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) {
        return false;}
    return (value.length > 0);
   }

function isNumber(num) {
    return (num.length > 0) && !isNaN(num);
   }
   
function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
   }

function isValid() {
    var valid = true;
    
    valid &= fieldValidation(fields.firstname, isNotEmpty);
    valid &= fieldValidation(fields.surame, isNotEmpty);
    valid &= fieldValidation(fields.email, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.telephoneNumber, isNumber);
    valid &= fieldValidation(fields.enquiry, isNotEmpty);
    valid &= arePasswordsEqual();
   
    return valid;
   }