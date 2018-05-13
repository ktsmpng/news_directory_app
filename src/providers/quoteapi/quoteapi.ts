import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
/*
  Generated class for the QuoteapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuoteapiProvider {
  apiUrl = 'http://quotes.rest/qod.json'

  constructor(public http: HttpClient) {
    console.log('Hello QuoteapiProvider Provider');
  }

  getArticles(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
