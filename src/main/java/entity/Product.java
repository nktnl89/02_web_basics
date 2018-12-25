package entity;

public class Product {
    private int id;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    private String img;
    private String text;
    private int price;

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public Product(int id, String img, String text, int price) {
        this.id = id;
        this.img = img;
        this.text = text;
        this.price = price;
    }

    public Product() {
    }
}
