const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.nav-items')

if (window.innerWidth < 761) {
    menu.style.display = "none"
}

onresize = (event) => {
    if (window.innerWidth > 761) {
        menu.style.display = "flex"
    }
};

hamburger.addEventListener('click', () => {
    if (menu.style.display === "none") {
        menu.style.display = "flex"
    } else {
        menu.style.display = "none"
    }
})