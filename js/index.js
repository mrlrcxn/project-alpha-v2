var topbar = document.getElementById('topbar');
var button = document.getElementById('menu__btn');
var menu = document.getElementById('navbar');
var smiley = document.getElementById('topbar__icon');
button.addEventListener('click', function() {
    topbar.classList.toggle('show');
    menu.classList.toggle('show');
    smiley.classList.toggle('show');
});