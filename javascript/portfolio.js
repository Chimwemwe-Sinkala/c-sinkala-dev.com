function showMenu() {
    let menuItems = document.querySelectorAll('.menu-items');
    menuItems.forEach(function(menuItem) {
        menuItem.classList.toggle('menu-items-display');
    });
}

let menuIcons = document.querySelectorAll('.menu img');
menuIcons.forEach(function(menuIcon) {
    menuIcon.addEventListener('click', showMenu);
});