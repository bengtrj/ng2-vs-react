/* tslint:disable:no-unused-variable */

import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MenuItemComponent} from './item.component';
import {Item} from './item.model';
import {MenuItemService} from '../data/item.service';
import 'rxjs/add/observable/of';

describe('MenuItemComponent', () => {

  let fixture: ComponentFixture<MenuItemComponent>;
  let component: MenuItemComponent;
  let compiled: HTMLElement;
  let menuItemServiceMock;

  beforeEach(async(() => {

    menuItemServiceMock = jasmine.createSpyObj('MenuItemServiceMock', ['orderItem']);

    TestBed.configureTestingModule({
      declarations: [
        MenuItemComponent
      ]
    }).overrideComponent(MenuItemComponent, {
      set: {
        providers: [
          {provide: MenuItemService, useValue: menuItemServiceMock}
        ]
      }
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemComponent);
    component = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create the component', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should render the items', async(() => {

    component.item = new Item(1, 'Salmon Sushi', 10.90);
    fixture.detectChanges();

    expect(compiled.textContent).toContain('Salmon Sushi');
    expect(compiled.textContent).toContain('€10.90');

    component.item = new Item(1, 'Steak Noodle Soup', 13.90);
    fixture.detectChanges();

    expect(compiled.textContent).toContain('Steak Noodle Soup');
    expect(compiled.textContent).toContain('€13.90');
  }));

  it('should render the order button', async(() => {

    component.item = new Item(1, 'Salmon Sushi', 10.90);
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('.button').textContent).toContain('Order');
  }));

  it('should add item to order when user clicks Order Button', async(() => {
    const orderButton = fixture.nativeElement.querySelector('.button');

    orderButton.click();
    expect(menuItemServiceMock.orderItem).toHaveBeenCalled();

  }));

});
