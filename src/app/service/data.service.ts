export class DataService {
  private data:string[] = [];

  addData(ip:string){
    this.data.push(ip)
  }

  getData(){
    return this.data;
  }
}
