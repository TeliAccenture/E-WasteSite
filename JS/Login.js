//Credited to Telisa DP, Accenture Internship, 
//Code First Girls 2022

const strongPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

//Setting main form feedback message
function setFormMessage(formElement, type, message){
    const messageElement = formElement.querySelector(".formMessage")

    messageElement.textContent = message;
    messageElement.classList.remove("formMessage--success", "formMessage--error");
    messageElement.classList.add(`formMessage--${type}`)
}
//Setting input field errors
function SetInputError(inputElement, message, type){
    inputElement.classList.remove("form-control--error")
    inputElement.classList.add(`form-control--${type}`)
    inputElement.parentElement.querySelector(".form-control-error-message").textContent = message;
}

//Showing and hiding the appropriate forms
document.addEventListener("DOMContentLoaded", ()=> {
    const loginForm = document.querySelector("#login");
   const createAccountForm = document.querySelector("#createAccount")

    document.querySelector("#createAccountLink").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden")
    });

    document.querySelector("#loginLink").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden")
    })
    loginForm.addEventListener("submit", e => {
        e.preventDefault()
        let loginUsername = document.querySelector("#loginUsername");
        let loginPassword = document.querySelector("#loginPassword");
        if(loginUsername.value.length > 3 && loginPassword.value.length > 5){
            open("../pages/index.html")
        }
        else{
         setFormMessage(loginForm, "error", "Invalid username or password")   
        };
        
    })

    //Input validation cases

    document.querySelectorAll(".form-control").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
           
                     
                switch (true) {
                    case e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10:
                        SetInputError(inputElement, "Username is too short", "error")
                        break;

                    case e.target.id === "signupPassword" && e.target.value.length > 0 && !strongPassword.test(e.target.value):
                        SetInputError(inputElement, "Password too weak", "error")
                        break;

                    case e.target.id === "signupPassword" && strongPassword.test(e.target.value):
                        SetInputError(inputElement, "", "")    
                        break;

                    case e.target.id === "confirmPassword" && e.target.value.length > 0 && e.target.id.value != document.getElementById("signupPassword").value:
                        SetInputError(inputElement, "Password doesn't match", "error")
                        break;
                    case e.target.id === "confirmPassword" && e.target.id.value === document.getElementById("signupPassword").value:
                            SetInputError(inputElement, "", "")
                            break;

                    default:
                        SetInputError(inputElement, "", "")
                        break;
                }
              
                        
                  
        })
    })
});

