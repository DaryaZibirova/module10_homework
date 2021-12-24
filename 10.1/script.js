const button = document.querySelector('.j-btn-test');
const icon1 = document.querySelector('.btn_icon1');
const icon2 = document.querySelector('.btn_icon2');

icon1.style.display = 'block';
icon2.style.display = 'none';

let changeIcon = function (){
    if (icon1.style.display == 'block'){
        icon1.style.display = 'none';
        icon2.style.display = 'block';
    }else if(icon2.style.display = 'block'){
        icon2.style.display = 'none';
        icon1.style.display = 'block';
    }
}

button.onclick = function(){
changeIcon();
}