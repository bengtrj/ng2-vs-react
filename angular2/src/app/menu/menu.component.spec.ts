/* tslint:disable:no-unused-variable */

import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {MenuComponent} from './menu.component';
import {MenuItemComponent} from './item/item.component';
import {Item} from './item/item.model';
import {MenuItemService} from './data/item.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('MenuComponent', () => {

  let fixture: ComponentFixture<MenuComponent>;
  let component: MenuComponent;
  let compiled: HTMLElement;

  function setUp(items: Item[]) {

    const menuItemServiceMock = jasmine.createSpyObj('MenuItemServiceMock', ['getItems']);
    menuItemServiceMock.getItems.and.returnValue(Observable.of(items));

    const override = {
      set: {
        providers: [
          {provide: MenuItemService, useValue: menuItemServiceMock}
        ]
      }
    };

    TestBed.configureTestingModule({
      declarations: [
        MenuComponent,
        MenuItemComponent
      ]
    }).overrideComponent(MenuComponent, override)
      .overrideComponent(MenuItemComponent, override);

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();

  }

  describe('MenuItemComponent with empty list of items', () => {

    beforeEach(() => {
      setUp([] as Item[]);
    });

    it(`should have as title 'Lunch Menu'`, async(() => {
      expect(component.menuTitle).toEqual('Lunch Menu');
      expect(compiled.querySelector('h2').textContent).toContain('Lunch Menu');
    }));

    it('should have no items listed', async(() => {
      expect(component.items).toEqual([]);
      expect(compiled.querySelectorAll('li').length).toBe(0);
    }));

  });

  describe('MenuItemComponent with items', () => {

    beforeEach(() => {
      setUp([
        {id: 11, name: 'Salmon Sushi', price: 10.99},
        {id: 12, name: 'Salmon Nigiri', price: 11.99},
        {id: 13, name: 'Tuna Sushi', price: 12.99}
      ]);
    });

    it('should have no items listed', async(() => {
      expect(compiled.querySelectorAll('li').length).toBe(3);
    }));

  });

});
