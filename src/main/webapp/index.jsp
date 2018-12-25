<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page isELIgnored ="false" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="css/main.css" />
</head>
<body><!--onload="createProducts()"-->
    <div class="container">
        <div class="header">
            <div class="login">
                <jsp:useBean id="currentUser" class="entity.User" scope="session"/>
                <c:out value="Привет, ${currentUser.getLogin()}"><a href="/jsp/authorization.jsp">Вход</a></c:out>
                <a href="/logout">Выход</a>
            </div>
            <div class="placeForBanner">мемасики для важных переговоров</div>
            <div class="search" onclick="popupClick(this)">Поиск</div>
            <div class="basket" onclick="popupClick(this)">
                <div class="basketRef">Корзина</div>
                <div class="basketPreview">0</div>
            </div>
        </div>
        <div class="products">
            <div class="category" id="category1">
                <div class="categoryName">категория1</div>
                <c:forEach var="product" items="${products}">
                    <div class="product" onclick="replyClick(this)" id="${product.getId()}">
                        <div class="productPicture"><img src=<c:out value="${product.getImg()}"/> /></div>
                        <div class="productText"><c:out value="${product.getText()}" /></div>
                        <div class="productPrice"><c:out value="${product.getPrice()}" /></div>
                        <div class="addProductToOrder" onclick="addProductToOrder(this)">В корзину</div>
                        <div class="deleteFromOrder" onclick="deleteFromOrder(this)">[X]</div>
                    </div>
                </c:forEach>
            </div>
            <!--<div class="category" id="category2">
                <div class="categoryName">категория2</div>
            </div>-->
        </div>
    </div>
    <div class="popupSearch">
        <div class="popupSearchContent">
            <div class="searchHeader">
                <div class="headline">Поиск:</div>
                <div class="closeButton" onclick="searchClose()">[X]</div>
            </div>
            <form action="#">
                <input type="text" name="search" id="text-to-find" placeholder="Наименование товара...">
                <input type="button" value="Найти" onclick="findProductByName(this.form)">
            </form>
            <div class="foundedProducts"></div>
        </div>
    </div>
    <div class="popupBasket">
        <div class="popupBasketContent">
            <div class="basketHeader">
                <div class="headline">Корзина:</div>
                <div class="closeButton" onclick="basketClose()">[X]</div>
            </div>
            <div class="busketProducts"></div>
            <div class="basketSum">
                <div>Сумма товаров</div>
                <div class="productSum"></div>
                <div class="issueButton" onclick="basketClose()">Оформить</div>
                <div>Скидка 10%</div>
                <div class="discountSum"></div>
                <div>Итого</div>
                <div class="totalSum"></div>
            </div>
        </div>
    </div>
    <div class="footer">тут футер</div>
    <script src="js/main.js"></script>
</body>
</html>