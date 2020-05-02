inc = document.querySelector('.inc'),
dec = document.querySelector('.dec'),
dItemNum = document.querySelector('.dragedItem input'),
items = document.querySelectorAll('span'),
overCart = document.querySelector('.over-cart'),
slideCart = document.querySelector('.slide-cart'),
close = document.querySelector('.fa-times'),
cart = document.querySelector('.nav-item.cart'),
addBtn = document.querySelector('.addCart')
quantity = document.querySelector('.buttons input[type=numner'),
modQuantity = document.querySelector('input[type=number]'),
price = document.querySelector('.slide-cart .price');

console.log(price);
function fadeOut() {
    slideCart.style.animation = 'slideOut 600ms forwards';
    overCart.style.animationDelay = '200ms';
    overCart.style.animation = 'fadeOut 600ms forwards';
    setTimeout(() => {
        overCart.style.display='none'
    }, 400);
}

function fadeIn() {
    slideCart.style.animation = 'slideIn 600ms forwards';
    overCart.style.animation = 'fadeIn 600ms forwards';
    setTimeout(() => {
        overCart.style.display='block'
    }, 100);
}


inc.onclick = () => {
    dItemNum.value = Number(dItemNum.value) + 1
}

dec.onclick = () => {
    dItemNum.value = Number(dItemNum.value) - 1
}


cart.onclick = fadeIn;
close.onclick = fadeOut;
overCart.onclick = fadeOut;

addBtn.onclick = function() {
    fadeIn();
    modQuantity.value = Number(modQuantity.value) + Number(quantity.value);
    price.innerText =  Number(modQuantity.value)*Number(document.querySelector('.itPrice').innerText)
}



slideCart.onclick = (event) =>{
    event.stopPropagation()
}


