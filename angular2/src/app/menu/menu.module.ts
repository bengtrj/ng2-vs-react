import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MenuComponent } from './menu.component';
import {MenuItemComponent} from './item/item.component';
import {MenuItemService} from './data/item.service';

@NgModule({
  declarations: [
    MenuComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MenuItemService]
})
export class MenuModule { }
