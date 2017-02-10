/* tslint:disable:no-unused-variable */
"use strict";
var testing_1 = require("@angular/core/testing");
var item_component_1 = require("./item.component");
var platform_browser_1 = require("@angular/platform-browser");
describe('MenuComponent', function () {
    var fixture;
    var component;
    var compiled;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                item_component_1.MenuComponent
            ],
        });
        testing_1.TestBed.compileComponents();
        fixture = testing_1.TestBed.createComponent(item_component_1.MenuComponent);
        component = fixture.debugElement.componentInstance;
        fixture.detectChanges();
        compiled = fixture.debugElement.nativeElement;
    });
    it('should create the component', testing_1.async(function () {
        expect(component).toBeTruthy();
    }));
    it('should render the items', testing_1.async(function () {
        var items = compiled.querySelectorAll('li');
        expect(items[0].textContent).toContain('Salmon Sushi');
        expect(items[0].textContent).toContain('€10.99');
        expect(items[1].textContent).toContain('Salmon Nigiri');
        expect(items[1].textContent).toContain('€11.99');
        expect(items[2].textContent).toContain('Tuna Sushi');
        expect(items[2].textContent).toContain('€12.99');
    }));
    it('should render the buttons on each item', testing_1.async(function () {
        var items = compiled.querySelectorAll('li');
        expect(items[0].querySelector('.button').textContent).toContain('Order');
        expect(items[1].querySelector('.button').textContent).toContain('Order');
        expect(items[2].querySelector('.button').textContent).toContain('Order');
    }));
    it('should add item to order when user clicks Order Button', testing_1.async(function () {
        expect(component.selectedItem).toBe(undefined);
        var items = fixture.debugElement.queryAll(platform_browser_1.By.css('li'));
        items[0].triggerEventHandler('click', null);
        expect(component.selectedItem).toEqual({ id: 11, name: 'Salmon Sushi', price: 10.99 });
        items[1].triggerEventHandler('click', null);
        expect(component.selectedItem).toEqual({ id: 12, name: 'Salmon Nigiri', price: 11.99 });
    }));
});
