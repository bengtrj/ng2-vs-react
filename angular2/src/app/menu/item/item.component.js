"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var item_model_1 = require("./item.model");
var MenuComponent = (function () {
    function MenuComponent() {
        this.items = item_model_1.AVAILABLE_ITEMS;
    }
    MenuComponent.prototype.onSelect = function (item) {
        this.selectedItem = item;
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    core_1.Component({
        selector: 'app-menu-item',
        templateUrl: 'item.component.html',
        styleUrls: ['item.component.css']
    })
], MenuComponent);
exports.MenuComponent = MenuComponent;
