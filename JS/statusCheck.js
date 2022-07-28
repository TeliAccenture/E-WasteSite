
let loginStatus;
let loginLink;
let delay = 150;

setTimeout(function checkStatus(loginStatus){
    if(loginStatus){
    loginLink = document.querySelector("#navLoginLink")
    loginLink.innerHTML = `<i class="fa-solid fa-user"></i>`
    loginLink.href = ""
} else {
    loginLink = document.querySelector("#navLoginLink")
    loginLink.innerHTML = `<i class="fa-solid fa-person-circle-question"></i>`
}
}, delay, loginStatus)



