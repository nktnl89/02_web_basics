package repository;

import entity.Basket;
import entity.Product;

public interface BasketRepositoryInterface {
    void addProductToBasket(Basket basket, Product product);
    void deleteProductFromBasket(Basket basket, Product product);
}
