const showSideBarNav = document.querySelector('#side-nav');
const sideBarButtonOpen = document.querySelector('.open');
const sideBarButtonClose = document.querySelector('.close');
const sideBarButton = document.querySelector('#button-nav');

sideBarButtonOpen.addEventListener('click', () => {
    showSideBarNav.classList.remove('hide');
    sideBarButtonOpen.classList.add('hide');
    sideBarButtonClose.classList.remove('hide');
});

sideBarButtonClose.addEventListener('click', () => {
    showSideBarNav.classList.add('hide');
    sideBarButtonOpen.classList.remove('hide');
    sideBarButtonClose.classList.add('hide');
});


// Sticky nav
const secondaryNav = document.querySelector('#secondaryNav');
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

