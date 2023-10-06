const burguer = document.querySelector('#burguer')
burguer.addEventListener('click', openMenu)

function openMenu() {
    if (menu.style.right == '-500px') {
        menu.style.right = '0px'
    } else{
        menu.style.right = '-500px'
    }
}