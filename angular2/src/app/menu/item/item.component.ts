import {Component, Input} from '@angular/core';
import {Item} from './item.model';
import {MenuItemService} from '../data/item.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: 'item.component.html',
  styleUrls: ['item.component.css'],
  providers: [MenuItemService]
})
export class MenuItemComponent {

  @Input()
  item: Item;

  constructor(private service: MenuItemService) {
  }

  addItem(item: Item): void {
    this.service.orderItem(item);
  }

}
