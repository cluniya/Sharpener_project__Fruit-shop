const  mainHeading = document.querySelector('#main-heading');
mainHeading.style.textAlign = 'center';



const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'gray';
fruits.style.margin = '30px';
fruits.style.padding = '30px';
fruits.style.width = '40%';
fruits.style.borderRadius = '5px';
fruits.style.listStyleType = 'none';


const basketHeading = document.querySelector('h2');
basketHeading.style.color = 'brown';
basketHeading.style.marginLeft = '30px';

const fruit = document.querySelectorAll('.fruit');
for (let i = 0; i < fruit.length; i++) {
    fruit[i].style.backgroundColor = 'white';
    fruit[i].style.margin = '10px';
    fruit[i].style.padding = '10px';
    fruit[i].style.borderRadius = '5px';
}

const evenfruit = document.querySelectorAll(".fruit:nth-child(even)");
for (let i = 0; i < evenfruit.length; i++) {
    evenfruit[i].style.backgroundColor = 'brown';
    evenfruit[i].style.color = 'white';
    
}