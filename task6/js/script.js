'use strict';

let menu = document.getElementsByClassName("menu")[0],
    e = document.getElementsByClassName('menu')[0].children,
    title = document.getElementsByClassName('title')[0],
    adv = document.getElementsByClassName('adv')[0],
    prompted = document.getElementsByClassName('prompt')[0]; 

// let arr = [].slice.call(e);
// arr.sort(function(a,b){
//     if(a.textContent > b.textContent) {return 1;}
//     if(a.textContent < b.textContent) {return -1;}
//     return 0;
// }).forEach(function(item){
//     menu.appendChild(item);
// });

 let arr = [].slice.call(e);

arr.splice(1, 2, arr[2], arr[1]);
 
arr.forEach(function(item){
    menu.appendChild(item);
 });

 let addItem = arr[2].cloneNode(true);
 addItem.textContent = 'Пятый пункт';
 menu.appendChild(addItem);
 
document.body.style.background = 'url(../img/apple_true.jpg)';

title.innerHTML = 'Мы продаем только подлинную технику Apple';

adv.remove();

let answer = prompt("Кака вы относитесь к технике Apple", "");

if(answer === null || answer === ''){
    alert("Надеемся в следующий раз вы оставите отзыв");
}else{
    prompted.innerHTML = answer;
}
