varItem = document.querySelector('.varItem');
nprice = document.querySelector('.itPrice');
console.log(price);

itemName = sessionStorage.getItem("itemName");
varItem.innerText = itemName


price = sessionStorage.getItem("price");
console.log(price);
nprice.innerText = price
