package io.pivotal;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.*;

@RestController()
@CrossOrigin(origins = "http://localhost:1337")
@RequestMapping(path = "/menu/items")
public class MenuController {

    private static final List<MenuItem> items = new ArrayList<MenuItem>() {
        {
            add(new MenuItem(1L, "Salmon Sushi", 10.99));
            add(new MenuItem(2L, "Tuna Sushi", 12.99));
            add(new MenuItem(3L, "Salmon Quinoa Risotto", 14.99));
        }
    };

    @RequestMapping(method = GET)
    public List<MenuItem> listItems() {
        return items;
    }

}
