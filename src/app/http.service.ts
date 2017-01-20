import { Injectable } from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx'
import {Observable} from "rxjs";

@Injectable()
export class HttpService {

  constructor(private http:Http) { }

  getData(){
    return this.http
      .get("https://angular2-cource-3badd.firebaseio.com/title.json")
      .map((response:Response) => response.json())
  }

  sendData(user:any){
    const body = JSON.stringify(user);
    const headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http
      .post(
        'https://angular2-cource-3badd.firebaseio.com/data.json',
        body,
        {
          headers: headers
        }
      )
      .map((data:Response) => data.json())
      .catch(this.handleError);
  }

  getOwnData(){
    return this.http
      .get("https://angular2-cource-3badd.firebaseio.com/data.json")
      .map((response:Response) => response.json())
  }

  private handleError(error:any){
    console.log(error);
    return Observable.throw(error);
  }
}
