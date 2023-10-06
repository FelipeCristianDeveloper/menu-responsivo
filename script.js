const burguer = document.querySelector('#burguer')
burguer.addEventListener('click', openMenu)

function openMenu() {
    if (menu.style.display == 'none') {
        menu.style.display = 'block'
    } else{
        menu.style.display = 'none'
    }
}