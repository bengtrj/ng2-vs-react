import {Component, OnInit} from '@angular/core';
import {MenuItemService} from './data/item.service';
import {Item} from './item/item.model';

@Component({
  selector: 'app-menu',
  providers: [MenuItemService],
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css']
})
export class MenuComponent implements OnInit {
  menuTitle = 'Lunch Menu';
  items: Item[] = new Item[0];

  constructor(private menuItemService: MenuItemService) {
  }

  ngOnInit(): void {

    this.menuItemService.getItems().subscribe((items: Item[]) => {
      this.items = items;
    });

  }

}
