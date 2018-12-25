package repository;

import entity.Product;

import java.util.ArrayList;
import java.util.List;

public class ProductRepository implements ProductRepositoryInterface {
    private List<Product> productList = new ArrayList<>();

    public List<Product> getProductList() {
        return productList;
    }

    public void setProductList(List<Product> productList) {
        this.productList = productList;
    }

    public ProductRepository() {
        productList.add(new Product(0, "../img/Computer-Guy.png", "Computer-guy", 100));
        productList.add(new Product(1, "../img/1317567954.png", "I know what you did", 100));
        productList.add(new Product(2, "../img/1317604469.png", "Why???", 100));
        productList.add(new Product(3, "../img/1369219032.png", "Poker-face", 100));
    }

    public ProductRepository(List<Product> productList) {
        this.productList = productList;
    }


    @Override
    public Product getProductById(int id) {
        return productList.stream().filter(product -> product.getId() == id).findFirst().orElse(null);
    }

    @Override
    public Product getProductByText(String text) {
        return productList.stream().filter(product -> product.getText().contains(text)).findFirst().orElse(null);
    }
}
