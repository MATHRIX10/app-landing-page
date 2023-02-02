const menu_bar = document.querySelector('#menu-bar')
const navbar = document.querySelector('.navbar' )


menu_bar.onclick = () => {
navbar.classList.toggle('active')
menu_bar.classList.toggle('fa-times')
}

