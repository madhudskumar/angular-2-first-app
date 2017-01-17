import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html'
})
export class TemplateDrivenComponent implements OnInit {

  onSubmit(form:NgForm){
    console.log(form);
  }

  constructor() { }

  ngOnInit() {
  }


}
