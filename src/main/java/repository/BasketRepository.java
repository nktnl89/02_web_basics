package repository;

import entity.Basket;
import entity.Product;

public class BasketRepository implements BasketRepositoryInterface{
    private Basket basket = new Basket();

    public BasketRepository(Basket basket) {
        this.basket = basket;
    }

    public Basket getBasket() {
        return basket;
    }

    public void setBasket(Basket basket) {
        this.basket = basket;
    }

    @Override
    public void addProductToBasket(Basket basket, Product product) {

    }

    @Override
    public void deleteProductFromBasket(Basket basket, Product product) {

    }
}
