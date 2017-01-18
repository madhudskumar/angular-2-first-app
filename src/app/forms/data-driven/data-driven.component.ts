import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css'],
})
export class DataDrivenComponent implements OnInit {
  myForm:FormGroup;

  constructor(  ) {
    this.myForm = new FormGroup({
      'username': new FormControl('Max',<any>Validators.required),
      'email': new FormControl('', [<any>Validators.required, <any>Validators.pattern("/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;")] ),
      'password': new FormControl('', <any>Validators.required),
    });
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.myForm);
  }

}
