/* tslint:disable:no-unused-variable */

import {async, inject, TestBed} from '@angular/core/testing';

import {MenuItemService} from './item.service';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {Item} from '../item/item.model';
import {
  BaseRequestOptions, ConnectionBackend, Http, HttpModule, Response, ResponseOptions,
  XHRBackend
} from '@angular/http';

describe('MenuItemComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [ HttpModule ],
      providers: [
        {provide: XHRBackend, useExisting: MockBackend},
        MenuItemService,
        MockBackend,
        BaseRequestOptions,
        { provide: Http,
          useFactory: (backend: MockBackend, options: BaseRequestOptions) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
  });

  it('should get items',
    inject([XHRBackend, MenuItemService], (mockBackend, service) => {

      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          connection.mockRespond(new Response(
            new ResponseOptions({
                body: [
                  {id: 11, name: 'Salmon Sushi', price: 10.99},
                  {id: 12, name: 'Salmon Nigiri', price: 11.99},
                  {id: 13, name: 'Tuna Sushi', price: 12.99}]
              }
            )));
        });

      service.getItems().subscribe((items: Item[]) => {
        expect(items.length).toBe(3);
        expect(items[0].id).toBe(11);
      });

    }));

});
