
// Sticky nav
const secondaryNav = document.querySelector('#sticky-nav');
const topOfSecondaryNav = secondaryNav.offsetTop; 
// The offsetTop property returns the top position (in pixels) relative to the top of the offsetParent element.

function fixNav() {
    // console.log(topOfSecondaryNav);
    if(window.scrollY >= topOfSecondaryNav){
        document.body.style.paddingTop = secondaryNav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    }
    else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');  
    }
    // The read-only scrollY property of the Window interface returns the number of pixels that the document is currently scrolled vertically
}

window.addEventListener('scroll', fixNav);

// Select DOM Items 
const menuButton = document.querySelector('.mobile__btn');
const menu = document.querySelector('.menu-offsite');
const menuBranding = document.querySelector('.menu-offsite__branding');
const menuNav = document.querySelector('.menu-offsite__nav');
const menuItems = document.querySelectorAll('.menu-offsite__item');


// Set Initial State of Menu
let showMenu = false;

menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu){
        menuButton.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        menuItems.forEach(item => item.classList.add('show'));

        // Set menu State
        showMenu = true;
    } else {
        menuButton.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        menuItems.forEach(item => item.classList.remove('show'));

        // Set menu State
        showMenu = false;
    }
}