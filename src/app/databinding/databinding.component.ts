import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
    stringInterpolation:string =  "This ins a string";
    numberInterpolatin:number = 1234;

    onTest(){
      return true;
    }
}
