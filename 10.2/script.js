const button = document.querySelector('.button');

button.addEventListener('click', function(){
    width = window.screen.width;
    height = window.screen.height;
    alert('ширина экрана: ' + width + ' высота экрана: ' + height);
});