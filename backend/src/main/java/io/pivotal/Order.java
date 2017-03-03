package io.pivotal;


import java.util.ArrayList;
import java.util.List;

public class Order {

    private String orderId;

    private List<MenuItem> items = new ArrayList<>();

    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public List<MenuItem> getItems() {
        return items;
    }

    public void setItems(List<MenuItem> items) {
        this.items = items;
    }

}
