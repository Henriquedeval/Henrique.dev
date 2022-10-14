const menu=document.querySelector('#menu-btn');
const navlist=document.querySelector('.social-navlist')


menu.addEventListener('click',()=>{
    navlist.classList.toggle('active')
})

