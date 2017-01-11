import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styles:[`
    .border{border: 2px solid black;}
    .background{background: #aaa;}
  `]
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
