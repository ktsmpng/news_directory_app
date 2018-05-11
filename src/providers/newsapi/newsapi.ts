import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Provider } from 'rxjs';
import { Observable } from 'rxjs/Observable';
/*
  Generated class for the NewsapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsapiProvider {
  apiUrl = 'https://newsapi.org/v1/articles?apiKey='
  apiKey = 'f63da1b8f32648f096a8fb5ae03d429a'
  source = "reuters";

  constructor(public http: HttpClient) {
    console.log('Hello NewsapiProvider Provider');
  }

  getArticles(): Observable<any> {
    return this.http.get(this.apiUrl + this.apiKey + "&source=" + this.source);
  }

}
