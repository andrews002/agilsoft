const navbarClick = () => {
    const burger = document.getElementById('burger');
    const ulNavbar = document.getElementById('ul-navbar');

    burger.addEventListener('click', () => {
        ulNavbar.classList.toggle('navbar-active');
    })
}

navbarClick();