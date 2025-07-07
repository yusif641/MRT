const popup = document.querySelector(".popup");
const cancel = document.querySelector(".popup__cross");
const buttons = document.querySelectorAll(".show-popup");

buttons.forEach((el) => {
    el.addEventListener("click", (e) => {
        e.preventDefault()
        popup.classList.add("show")
    })
})

cancel.addEventListener("click", (e) => {
    popup.classList.remove("show");
})

document.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.classList.remove("show");
    }
})