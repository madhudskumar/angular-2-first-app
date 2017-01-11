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
  private items;
  private clicked;
  private value;
  doClick(){
    this.clicked = !this.clicked;
  }
  constructor(  ) {

  }

  ngOnInit() {
    this.clicked = false;
    this.items = [1, 2, 3, 4, 5, 6];
    this.value = 124;
  }

}
