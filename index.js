let navbar = document.querySelector('.navbar')
let menu = document.querySelector('.menu')

menu.addEventListener('click',()=>{
    menu.classList.toggle('move')
    navbar.classList.toggle('nav-open')
})

