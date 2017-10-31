import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const endpoint = 'http://jsonplaceholder.typicode.com/photos';

@Injectable()
export class PhotoService {

  constructor(private http: Http) { }

  list(_length) {
    return this.http.get(endpoint)
    .map(response => response.json().slice(0, _length))
    .catch(this.handleError);
  }

  private handleError(error: any, caught: any): any {
    console.error(error, caught);
  }
}
