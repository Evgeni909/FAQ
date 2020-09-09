$(function() {
    $('.toggle-button').click(function() {
        $('.questions__icon-content').slideToggle();
    });
});

let element = document.querySelectorAll('.toggle');
let element2 = document.querySelectorAll('.ver');
let element3 = document.querySelectorAll('.hor');

for (let i = 0; i < element.length; i++) {
    element[i].onclick = () => {
        element2[i].classList.toggle('active-ver');
        element3[i].classList.toggle('active-hor');
    };
}




