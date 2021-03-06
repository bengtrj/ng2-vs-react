/* tslint:disable:no-unused-variable */
import {ComponentFixture, TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {MenuItemComponent} from './menu/item/item.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MenuItemService} from './menu/data/item.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let compiled: HTMLElement;

  beforeEach(() => {

    const menuItemServiceMock = jasmine.createSpyObj('MenuItemServiceMock', ['getItems']);
    menuItemServiceMock.getItems.and.returnValue(Observable.of([]));

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MenuComponent,
        MenuItemComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule
      ]
    }).overrideComponent(MenuComponent, {
      set: {
        providers: [
          {provide: MenuItemService, useValue: menuItemServiceMock}
        ]
      }
    });
    TestBed.compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create the app', async(() => {
    expect(app).toBeDefined();
  }));

  it(`should have as title 'Handy Menu'`, async(() => {
    expect(app.title).toEqual('Handy Menu');
    expect(compiled.querySelector('h1').textContent).toContain('Handy Menu');
  }));

});
