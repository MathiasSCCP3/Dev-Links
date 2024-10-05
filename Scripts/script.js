function ToggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    const img = document.querySelector("#profile img")
    if (html.classList.contains("light")) {
        img.setAttribute("src", "./Imgs/profile-light.png")
    } else {
        img.setAttribute("src", "./Imgs/profile-dark.png")
    }
}