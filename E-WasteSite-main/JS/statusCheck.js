
let loginStatus;
let loginLink;
let delay = 100;

setTimeout(function checkStatus(loginStatus){
    console.log(loginStatus)
    if(loginStatus){
    loginLink = document.querySelector("#navLoginLink")
    loginLink.innerHTML = "Logged in"
    loginLink.href = ""
} else {
    loginLink = document.querySelector("#navLoginLink")
    loginLink.innerHTML = "Login/Signup"
}
}, delay, loginStatus)



