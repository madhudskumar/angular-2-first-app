import {Component, OnInit, OnDestroy} from '@angular/core';
import {HttpService} from "../http.service";
import {Subscription} from "rxjs";
// import {Response} from "@angular/http";

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
  providers:[HttpService]
})
export class HttpComponent implements OnInit, OnDestroy {
  private title;
  private data:string[] = [];
  private titleSubscriber:Subscription;


  asyncStr = this.httpService.getData();
  constructor(private httpService:HttpService) { }

  onGetData(){
    this.httpService.getOwnData()
      .subscribe(
        data => {
          const myArray = [];
          for(let key in data){
            myArray.push(data[key]);
          }
          this.data = myArray
        }
      )
  }

  ngOnInit() {
    this.titleSubscriber = this.httpService.getData()
      .subscribe(
        (data:any) =>{
          console.log(data);
          this.title = data;
        }
      )
  }

  ngOnDestroy(){
    this.titleSubscriber.unsubscribe();
  }

  onSubmit(username:string, email:string){
    this.httpService
      .sendData({
        username:username,
        email:email
      })
      .subscribe(
        (data:any) => console.log(data)
      )
  }
}
