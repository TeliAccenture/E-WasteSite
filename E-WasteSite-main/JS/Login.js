//Credited to Telisa DP, Accenture Internship, Code First Girls 2022

//Setting main form feedback message
function setFormMessage(formElement, type, message){
    const messageElement = formElement.querySelector(".formMessage")

    messageElement.textContent = message;
    messageElement.classList.remove("formMessage--success", "formMessage--error");
    messageElement.classList.add(`formMessage--${type}`)
}
//Setting input field errors
function SetInputError(inputElement, message){
    inputElement.classList.add("formInput--error")
    inputElement.parentElement.querySelector(".formInput-error-message").textContent = message;
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

    //Input validation cases

    document.querySelectorAll(".formInput").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
           
            // if(e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10)
            //     SetInputError(inputElement, "Username is too short")
                switch(e.target.id) {
                    case "signupUsername":
                        SetInputError(inputElement, "Username is too short")
                      break;
                    case "signupPassword":
                        SetInputError(inputElement, "Password too short")
                      break;
                    default:
                        
                  }
        })
    })
});

