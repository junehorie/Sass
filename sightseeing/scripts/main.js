document.addEventListener('DOMContentLoaded', function () {
    // hamburger
    const menuBtn = document.getElementById('menuBtn');
    const menuBtnLine = document.getElementsByClassName('hamburgerLine');
    const menu = document.getElementById('menu');

    menuBtn.addEventListener('click', function () {
        menu.classList.toggle('is-active');

        for (let i = 0; i < menuBtnLine.length; i++) {
            menuBtnLine[i].classList.toggle('is-active');

            // aria-label 
            if (menuBtnLine[i].classList.contains('is-active')) {
                menuBtn.setAttribute('aria-expanded', 'true');
            } else {
                menuBtn.setAttribute('aria-expanded', 'false');
            }
        }
    });
    
    menu.addEventListener('click', function () {
        menu.classList.remove('is-active');

        for (let i = 0; i < menuBtnLine.length; i++) {
            menuBtnLine[i].classList.toggle('is-active');
            menuBtn.setAttribute('aria-expanded', 'false');
        }
    })
});