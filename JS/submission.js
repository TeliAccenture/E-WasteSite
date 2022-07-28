let buttons = document.querySelectorAll(".btn")

function submission(buttons){
    buttons.forEach(button => {
        console.log(button)
    button.addEventListener("click", e => {
        e.preventDefault();
        
        open("./submitted.html")
    })
})
}

submission(buttons)