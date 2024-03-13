'use strict';
//об'єкт з продуктами
const productsData = {
    electronics: [
        {name: "Холодильник", description: "SAMSUNG"},
        {name: "Стиральна машина", description: "Bosсh"}
    ],
    clothing: [
        {name: "Джинси", description: "Next"},
        {name: "Футболка", description: "GAP"}
    ],
    books: [
        {name: "Наукова-фантастика", description: "Дюна"},
        {name: "Дитяча книга", description: "Гаррі Поттер і смертельні реліквії"}
    ]
};
//Функція для відображення продуктів відповідно до обраної категорії
function showProducts(category) {
    const productList = document.getElementById("productList");
    //Очищення списку продуктів
    productList.innerHTML = '';
    //Додавання кожного продукту до списку
    productsData[category].forEach(product => {
        productList.innerHTML += `<li><a href="#" onclick="showProductInfo('${product.name}','${product.description}')">${product.name}</a></li>`;
    });
}
//Функція для відображення інформації про обраний продукт
function showProductInfo(name, description){
    document.getElementById("productName").innerHTML = name;
    document.getElementById("productDescription").innerHTML = description;
}
//Фунцкція для покупки продукту
function buyProduct(){
    alert('Товар куплений!');
    //Очищення інформації після купівлі продукту
    document.getElementById("productName").innerHTML = "";
    document.getElementById("productDescription").innerHTML = "";
}
//Початкове відображення продукту на сторінці
showProducts('electronics');