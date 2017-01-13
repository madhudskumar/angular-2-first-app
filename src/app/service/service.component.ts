import { Component, OnInit } from '@angular/core';
import {DataService} from "./data.service";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
  providers:[DataService]
})
export class ServiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
