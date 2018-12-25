let productArrayCategory = [];
//productArrayCategory[0] = new Product(0, "../3/img/Computer-Guy.png", "Computer-guy", Math.floor(Math.random() * 100));
//productArrayCategory[1] = new Product(1, "../3/img/1317567954.png", "I know what you did", Math.floor(Math.random() * 100));
//productArrayCategory[2] = new Product(2, "../3/img/1317604469.png", "Why???", Math.floor(Math.random() * 100));
//productArrayCategory[3] = new Product(3, "../3/img/1369219032.png", "Poker-face", Math.floor(Math.random() * 100));
//productArrayCategory[4] = new Product(4, "../3/img/Ben-Chang-aka-Senor-Chang-bw-by-Rones.png", "Ben-Chang-meme", Math.floor(Math.random() * 100));
//productArrayCategory[5] = new Product(5, "../3/img/1-2016011842.png", "I know that feel bro", Math.floor(Math.random() * 100));
//productArrayCategory[6] = new Product(6, "../3/img/Facepalm.png", "Facepalm", Math.floor(Math.random() * 100));
//productArrayCategory[7] = new Product(7, "../3/img/feels.png", "Pepe the frog", Math.floor(Math.random() * 100));
//productArrayCategory[8] = new Product(8, "../3/img/forever-alone-bw.png", "Forever alone", Math.floor(Math.random() * 100));
//productArrayCategory[9] = new Product(9, "../3/img/FryazinoWitness.png", "Fryazino witness", Math.floor(Math.random() * 100));
//productArrayCategory[10] = new Product(10, "../3/img/Meme-me-gusta.png", "Me gusta", Math.floor(Math.random() * 100));
//productArrayCategory[11] = new Product(11, "../3/img/Untitled-1.png", "Okay-guy", Math.floor(Math.random() * 100));
//productArrayCategory[12] = new Product(12, "../3/img/YaoMing-meme.png", "Yao Ming-meme", Math.floor(Math.random() * 100));

const BASKET_PREVIEW_ELEMENT = document.querySelector(".basketPreview");
const PRODUCTS_SUM_ELEMENT = document.querySelector(".productSum");
const DISCOUNT_SUM_ELEMENT = document.querySelector(".discountSum");
const TOTAL_SUM_ELEMENT = document.querySelector(".totalSum");
const BASKET_PRODUCTS_ELEMENT = document.querySelector(".busketProducts");
const DISCOUNT_PERCENT = 10;

function Product(id, productPicture, productText, productPrice) {
    this.id = id;
    this.productPicture = productPicture;
    this.productText = productText;
    this.productPrice = productPrice;

    let productClosure = this;
    this.getProductPrice = function() {
        return productClosure.productPrice;
    }
    this.createProductElement = function (parentNode) {
        let newProductDiv = document.createElement("div");
        newProductDiv.className = "product";
        newProductDiv.setAttribute("id", productClosure.id);
        newProductDiv.setAttribute("onClick", "replyClick(this)");

        let newProductImg = document.createElement("div");
        newProductImg.className = "productPicture";
        let newImg = document.createElement("img");
        newImg.setAttribute("src", productClosure.productPicture)
        newProductImg.appendChild(newImg);

        let newProductText = document.createElement("div");
        newProductText.className = "productText";
        newProductText.innerText = productClosure.productText;

        let newProductPrice = document.createElement("div");
        newProductPrice.className = "productPrice";
        newProductPrice.innerText = productClosure.productPrice + " р.";

        let newProductAddProductToOrder = document.createElement("div");
        newProductAddProductToOrder.className = "addProductToOrder";
        newProductAddProductToOrder.setAttribute("onClick", "addProductToOrder(this)");
        newProductAddProductToOrder.innerText = "В корзину";

        let newProductDeleteFromOrder = document.createElement("div");
        newProductDeleteFromOrder.className = "deleteFromOrder";
        newProductDeleteFromOrder.setAttribute("onclick", "deleteFromOrder(this)");
        newProductDeleteFromOrder.innerText = "[X]";

        newProductDiv.appendChild(newProductImg);
        newProductDiv.appendChild(newProductText);
        newProductDiv.appendChild(newProductPrice);
        newProductDiv.appendChild(newProductAddProductToOrder);
        newProductDiv.appendChild(newProductDeleteFromOrder);

        parentNode.appendChild(newProductDiv);
    }
}

let createProducts = function () {

//    let counter = 0;
//    productArrayCategory.forEach(element => {
//        if (counter < 8) {
//            element.createProductElement(document.getElementById("category1"));
//        } else {
//            element.createProductElement(document.getElementById("category2"));
//        }
//        counter++;
//    });
    //addToBasketAddListener();
    setVisibilityAllProductChildrenToFalse();
}
let addToBasketAddListener = function(){
    let addProductToOrderElementNodeList = document.querySelectorAll(".addProductToOrder");
    addProductToOrderElementNodeList.forEach(element => {
        element.addEventListener("click", function() {addProductToOrder(element);}, false);
    });
}
let replyClick = function (element) {
    if (calculatePercentsWidthOfElement(element) < 80) {
        closeAnotherProducts();
        setOpenStyle(element);
        setVisibilityAllProductChildrenToFalse();
        setVisibilityProductChildren(element, true);
        element.scrollIntoView(false);
    } else {
        closeAnotherProducts();
        setVisibilityAllProductChildrenToFalse();
        setCloseStyle(element);
        element.scrollIntoView(false);
    }
}
let setCloseStyle = function (element) {
    element.style.cssText = "flex-direction: column;\
        justify-content: space-evenly;\
        flex-basis: content;";
}
let setOpenStyle = function (element) {
    element.style.cssText = "flex-direction: row;\
        justify-content: space-around;\
        width:100%;\
        background-color: whitesmoke;\
        box-shadow: 0px 0px 10px #000;";
}
let closeAnotherProducts = function () {
    let productsElementNodeList = document.querySelectorAll(".product");
    productsElementNodeList.forEach(element => {
        if (calculatePercentsWidthOfElement(element) > 80) {
            element.style.cssText = "order: 0;\
                flex-basis: content;";
            return;
        }
    })
}
let setVisibilityAllProductChildrenToFalse = function () {
    let stringSelector = ".category .productPrice, \
        .category .addProductToOrder, \
        .category .deleteFromOrder,\
        .foundedProducts .productPrice, \
        .foundedProducts .addProductToOrder, \
        .foundedProducts .deleteFromOrder";
    let productChildrenNodeList = document.querySelectorAll(stringSelector);
    productChildrenNodeList.forEach(elementChild => {
        elementChild.style.cssText = "display: none;";
    });
}
let setVisibilityProductChildren = function (element, value) {
    let productChildrenNodeList = element.querySelectorAll(".productPrice, .addProductToOrder");
    productChildrenNodeList.forEach(elementChild => {
        if (value) {
            elementChild.style.cssText = "display: flex;\
                align-items: center;\
                justify-content: center;";
        } else {
            elementChild.style.cssText = "display: none;";
        }
    });
}
let popupClick = function (element) {
    let selectedElement;
    if (element.className == "search") {
        selectedElement = document.querySelector(".popupSearch");
    }
    if (element.className == "basket") {
        selectedElement = document.querySelector(".popupBasket");
    }
    selectedElement.style.cssText = "z-index: 10;";
}
let basketClose = function () {
    let basketElement = document.querySelector(".popupBasket");
    basketElement.style.cssText = "z-index: 0;";
}
let searchClose = function () {
    let searchElement = document.querySelector(".popupSearch");
    searchElement.style.cssText = "z-index: 0;";
}
let findProductByName = function (form) {
    let searchQuery = form.elements.search.value.toLowerCase();
    let foundedProductsElement = document.querySelector(".foundedProducts");
    let foundedProductsList = foundedProductsElement.querySelectorAll(".product");
    foundedProductsList.forEach(element => {
        foundedProductsElement.removeChild(element);
    });
    productArrayCategory.forEach(element => {
        if (element.productText.toLowerCase().indexOf(searchQuery) > -1) {
            element.createProductElement(foundedProductsElement);
        }
    });
    setVisibilityProductChildren(form.parentNode, false);
}

let addProductToOrder = function (buttonAddElement) {
    let productElement = buttonAddElement.parentNode;
    try {
        let selectedProduct = getProductById(productElement.getAttribute("id"));
        increaseCounterBasket(1);
        increaseBasketSum(selectedProduct);
        selectedProduct.createProductElement(BASKET_PRODUCTS_ELEMENT);
        BASKET_PRODUCTS_ELEMENT.querySelectorAll(".product").forEach(element => {
            element.setAttribute("onClick", null);
        });
    } catch (e) {
        alert(e.message);
    }
}

let deleteFromOrder = function (buttonDeleteElement) {
    let productElement = buttonDeleteElement.parentNode;
    try {
        let selectedProduct = getProductById(productElement.getAttribute("id"));
        increaseCounterBasket(-1);
        decreaseBasketSum(selectedProduct);
        BASKET_PRODUCTS_ELEMENT.removeChild(productElement);
    }catch (e) {
        alert(e.message);
    }
    
}
let decreaseBasketSum = function (element) {
    PRODUCTS_SUM_ELEMENT.innerText = Number(PRODUCTS_SUM_ELEMENT.innerText) - element.getProductPrice();
    DISCOUNT_SUM_ELEMENT.innerText = Number(DISCOUNT_SUM_ELEMENT.innerText) - calculatePercent(element.getProductPrice(), DISCOUNT_PERCENT);
    TOTAL_SUM_ELEMENT.innerText = PRODUCTS_SUM_ELEMENT.innerText - DISCOUNT_SUM_ELEMENT.innerText;
}
let increaseBasketSum = function (productPrice) {
    PRODUCTS_SUM_ELEMENT.innerText = Number(PRODUCTS_SUM_ELEMENT.innerText) + productPrice;
    DISCOUNT_SUM_ELEMENT.innerText = Number(DISCOUNT_SUM_ELEMENT.innerText)+calculatePercent(Number(productPrice), DISCOUNT_PERCENT);
    TOTAL_SUM_ELEMENT.innerText = PRODUCTS_SUM_ELEMENT.innerText - DISCOUNT_SUM_ELEMENT.innerText;
}
let increaseCounterBasket = function (count) {
    BASKET_PREVIEW_ELEMENT.innerText = parseInt(BASKET_PREVIEW_ELEMENT.innerText) + count;
}
let calculatePercentsWidthOfElement = function (element) {
    let parent = element.parentNode;
    let widthPercents = Math.floor((element.offsetWidth / parent.offsetWidth) * 100);
    return widthPercents;
}
let calculatePercent = function (num, percent) {
    return Math.floor(num * (percent / 100));
}
let getProductById = function(productId){
    let selectedProduct = productArrayCategory.find(product => product.id == productId);
    if (selectedProduct === undefined) {
        throw new RangeError(`Продукт с id ${productId} не найден!`);
    }
    return selectedProduct;
}