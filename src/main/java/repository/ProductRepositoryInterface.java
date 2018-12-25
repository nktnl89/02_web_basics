package repository;

import entity.Product;

public interface ProductRepositoryInterface {
    Product getProductById(int id);
    Product getProductByText(String text);
}
