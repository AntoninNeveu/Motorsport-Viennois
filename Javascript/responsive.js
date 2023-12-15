const cross = document.querySelector("#cross-burger")
const ResponsiveMenu = document.querySelector("#responsive-menu")
const burger = document.querySelector("#burger")

burger.addEventListener("click", () => {
    ResponsiveMenu.style.transform = "translateX(0%)"
})

cross.addEventListener("click", () => {
    ResponsiveMenu.style.transform = "translateX(100%)"
})