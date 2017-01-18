import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styles:[`
    .ng-invalid{
      border:1px solid pink;
    }
  `]
})
export class TemplateDrivenComponent implements OnInit {
  user = {
    username:'madhu',
    email:'m@1.c',
    password:'asdad'
  }

  onSubmit(form:NgForm){
    console.log(form.value);
  }

  constructor() { }

  ngOnInit() {
  }


}
