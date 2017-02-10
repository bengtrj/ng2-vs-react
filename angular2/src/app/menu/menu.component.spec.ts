/* tslint:disable:no-unused-variable */

import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {MenuComponent} from './menu.component';
import {MenuItemComponent} from './item/item.component';
import {Item} from './item/item.model';
import {MenuItemService} from './data/item.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

fdescribe('MenuItemComponent', () => {

  let fixture: ComponentFixture<MenuComponent>;
  let component: MenuComponent;
  let compiled: HTMLElement;

  class MenuItemServiceMock {
    getItems(): Observable<Item[]> {
      return Observable.of([]);
    }
  };

  beforeEach(() => {



    TestBed.configureTestingModule({
      declarations: [
        MenuComponent,
        MenuItemComponent
      ]
    }).overrideComponent(MenuComponent, {
      set: {
        providers: [
          {provide: MenuItemService, useClass: MenuItemServiceMock}
        ]
      }
    });

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.debugElement.componentInstance;

    compiled = fixture.debugElement.nativeElement;
  });

  it('should create the component', async(() => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  }));

  it(`should have as title 'Lunch Menu'`, async(() => {
    fixture.detectChanges();
    expect(component.menuTitle).toEqual('Lunch Menu');
    expect(compiled.querySelector('h2').textContent).toContain('Lunch Menu');
  }));

});
