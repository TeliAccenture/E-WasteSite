function setFormMessage(formElement, type, message){
    let messageElement = formElement.querySelector(".formMessage")

    messageElement.textContent = message;
    messageElement.classList.remove("formMessageSuccess", "formMessageError");
    messageElement.classList.add(`formMessage${type}`)
}

function SetInputError(inputElement, message){
    inputElement.classList.add("formInputError")
    inputElement.parentElement.querySelector(".formInputErrorMessage").textContent = message;
}

document.addEventListener("DOMContentLoaded", ()=> {
    let loginForm = document.querySelector("#login");
   let createAccountForm = document.querySelector("#createAccount")

document.querySelector("#linkCreateAccount").addEventListener("click", e => {
    e.preventDefault();
    loginForm.classList.add("formHidden");
    createAccountForm.classList.remove("formHidden")
});

document.querySelector("#linkLogin").addEventListener("click", e => {
    loginForm.classList.remove("formHidden");
    createAccountForm.classList.add("formHidden")
})
loginForm.addEventListener("submit", e => {
    e.preventDefault()

    //Perform (fake) database call
    setFormMessage(loginForm, "error", "Invalid username or password")
})

document.querySelectorAll(".formInput").forEach(inputElement => {
    inputElement.addEventListener("blur", e => {
        if(e.target.id === "signupUsername" && e.target.value.length > 0 && target.value.length < 10)
            SetInputError(inputElement, "Username is too short")
    })
})
});

