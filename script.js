window.addEventListener('DOMContentLoaded', () => {

    document.getElementById('hamburger').addEventListener('click', () => {
        document.getElementById('menu').classList.toggle('hideMenu');
        document.getElementById('menu').classList.toggle('showMenu');
    });
    
    document.getElementById('logout').addEventListener('click', () => {
        window.location.href='frontpage.html';
    });
    
    document.getElementById('alta').addEventListener('click', () => {
        window.location.href='alta.html';
    });
    
    document.getElementById('statistics').addEventListener('click', () => {
        window.location.href='estadisticas.html';
    });

    $('.dropdown-toggle').dropdown()
    
});
