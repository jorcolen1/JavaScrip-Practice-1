/*console.log('Hello word')*/
/*document. querySelector('.menu-btn').addEventListener('click', ()=> {
    console.log('click!!!')
});*//*seleccionamos un elemento que tenga como clase menu-btn y añadimos un lisener y cuando haga click en el elemento se realiza lo siguiente  */

document. querySelector('.menu-btn').addEventListener('click', ()=> {
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards',{ delay:500 });
ScrollReveal().reveal('.cards-banner-one',{ delay:500 });
ScrollReveal().reveal('.cards-banner-two',{ delay:500 });

