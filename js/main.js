const dropdownMenu = document.querySelector('.catalog');
const hiddenMenu = document.querySelectorAll('.menu-link--hidden');




dropdownMenu.addEventListener('click', function() {
    hiddenMenu.forEach(function(menu1) {
        menu1.classList.remove('menu-link--hidden');
    })
})