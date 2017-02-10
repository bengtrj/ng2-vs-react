import {Component, Input} from '@angular/core';
import {Item} from './item.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: 'item.component.html',
  styleUrls: ['item.component.css']
})
export class MenuItemComponent {

  @Input()
  item: Item;

}
