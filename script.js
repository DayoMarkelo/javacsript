
const menuClass = document.querySelector('.menu')
const buttons = document.querySelectorAll(".textStyle")

const backgroundBody = document.getElementById('background')
const changeBackground = function () {
    buttons.forEach(function (item) {
        item.addEventListener('click', function (e) {
            backgroundBody.removeAttribute("class")
            backgroundBody.classList.add(e.target.classList[1])
            menuClass.classList.toggle('menu-drop')
        })
    })
}

const hamburgerMenu = document.getElementById('hamburger-menu')
const toggleHamburgerMenu = function () {
    hamburgerMenu.addEventListener('click', function () {
        menuClass.classList.toggle('menu-drop')
    })
}

toggleHamburgerMenu();
changeBackground();