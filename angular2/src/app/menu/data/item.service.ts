import {Injectable} from '@angular/core';
import {Item} from '../item/item.model';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MenuItemService {

  constructor(private http: Http) {

  }

  getItems(): Observable<Item[]> {
    return this.http.get('http://localhost:8080/menu/items')
      .map((res: Response) => {
          return res.json() as Item[];
        }
      );
  }

}

