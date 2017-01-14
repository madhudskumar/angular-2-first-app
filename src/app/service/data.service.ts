import {LogService} from "./log.service";
import {Injectable, EventEmitter} from "@angular/core";

@Injectable()
export class DataService {
  private data:string[] = [];
  pushDataEmitter = new EventEmitter<string>();

  constructor(private logService:LogService){

  }

  addData(ip:string){
    this.data.push(ip)
    this.logService.writeToLog(ip);
  }

  getData(){
    return this.data;
  }

  pushData(value:string){
    this.pushDataEmitter.emit(value);
  }
}
