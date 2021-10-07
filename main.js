const navLinks=document.querySelector('.nav-links')
const bars=document.querySelector('.bars')
const header=document.querySelector('.head')


bars.addEventListener('click',function(){
    navLinks.classList.toggle('style');
    header.classList.toggle('header-show');
    bars.classList.toggle('rotate')
})