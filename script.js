const burguer = document.querySelector('#burguer')
burguer.addEventListener('click', openMenu)

function openMenu() {
    if (menu.style.left == '800px') {
        menu.style.left = '0px'
    } else{
        menu.style.left = '800px'
    }
}