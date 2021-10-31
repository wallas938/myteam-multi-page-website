const htmlTag = document.querySelector('html');
const menu = document.querySelector('.menu');
const backdrop = document.querySelector('.modals-backdrop');
const openMenu = document.querySelector('.icon-hamburger>img');
const closeMenu = document.querySelector('.icon-close>img');
let open = false;

openMenu.addEventListener('click', function () {
    toggleMenu();
});

closeMenu.addEventListener('click', function () {
    toggleMenu();
});

function toggleMenu() {
    if (!open) {
        open = true;
        menu.classList.remove('hide');
        menu.classList.add('show-flex');
        backdrop.classList.remove('hide');
        backdrop.classList.add('show-block');
        htmlTag.style.overflow = "hidden";
        setTimeout(function() {
            menu.classList.add('slide-in');
            menu.classList.remove('slide-out');
        }, 0);
        return;
    }
    open = false;
    menu.classList.add('hide');
    backdrop.classList.add('hide')
    menu.classList.remove('show-flex');
    setTimeout(function() {
        menu.classList.remove('slide-in');
        menu.classList.add('slide-out');
    }, 0);
    backdrop.classList.remove('show-block');
    htmlTag.style.overflow = "auto";
};
