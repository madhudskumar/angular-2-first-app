import {LogService} from "./log.service";
export class DataService {
  private data:string[] = [];

  constructor(private logService:LogService){

  }

  addData(ip:string){
    this.data.push(ip)
    this.logService.writeToLog(ip);
  }

  getData(){
    return this.data;
  }
}
