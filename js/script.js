const openMobileMenuBtn = document.querySelector('#open-menu-btn');
const closeMobileMenuBtn = document.querySelector('#mobile-menu__close-btn');
const mobileMenu = document.querySelector('.mobile-menu');

openMobileMenuBtn.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('mobile-menu_open');
})

closeMobileMenuBtn.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('mobile-menu_open');
})