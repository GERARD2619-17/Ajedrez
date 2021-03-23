const d = document;

document.addEventListener('DOMContentLoaded', e => {
    iniciarApp();
});

function iniciarApp(){
    menuHamburguer();
}

function menuHamburguer(){
    const btnMenu = d.querySelector('.btn-menu');
    
    btnMenu.addEventListener('click', e => {
        const navegacion = d.querySelector('.mostrar_menu');
        btnMenu.classList.toggle('is-active');
        navegacion.classList.toggle('mostrar');
    })
}