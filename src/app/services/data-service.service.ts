import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataServiceService {

  result: any;

  constructor(private _http: Http) {}

  getProducts(): Observable<any> {
    return this._http.get("/api/products").map(res => this.result = res.json());

  }
}
