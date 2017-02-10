/* tslint:disable:no-unused-variable */

import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {MenuItemComponent} from './item.component';
import {Item} from './item.model';

describe('MenuItemComponent', () => {

  let fixture: ComponentFixture<MenuItemComponent>;
  let component: MenuItemComponent;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MenuItemComponent
      ],
    }).compileComponents();
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
    // expect(component.selectedItem).toBe(undefined);
    //
    // const items = fixture.debugElement.queryAll(By.css('li'));
    //
    // items[0].triggerEventHandler('click', null);
    // expect(component.selectedItem).toEqual({ id: 11, name: 'Salmon Sushi', price: 10.99 });
    //
    // items[1].triggerEventHandler('click', null);
    // expect(component.selectedItem).toEqual({ id: 12, name: 'Salmon Nigiri', price: 11.99 });
  }));

});
