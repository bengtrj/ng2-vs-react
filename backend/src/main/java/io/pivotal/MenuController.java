package io.pivotal;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController()
@CrossOrigin(origins = "*")
@RequestMapping(path = "/menu")
public class MenuController {


    private Map<String, Order> orders = new HashMap<>();

    private static final Map<Long, MenuItem> items = new HashMap<Long, MenuItem>() {
        {
            put(1L, new MenuItem(1L, "Salmon Sushi", 10.99));
            put(2L, new MenuItem(2L, "Tuna Sushi", 12.99));
            put(3L, new MenuItem(3L, "Quinoa Risotto", 14.99));
        }
    };

    @RequestMapping(path = "/items", method = GET)
    public Collection<MenuItem> listItems() {
        return items.values();
    }

    @RequestMapping(path = "/order", method = POST)
    public Order addItem(@RequestBody OrderItem orderItem) {

        Order order = orders.get(orderItem.getOrderId());
        if (order == null) {
            order = new Order();
            order.setOrderId(orderItem.getOrderId());
            order.setItems(new ArrayList<>());
            orders.put(order.getOrderId(), order);
        }

        order.getItems().add(items.get(orderItem.getItemId()));

        return order;

    }

}
