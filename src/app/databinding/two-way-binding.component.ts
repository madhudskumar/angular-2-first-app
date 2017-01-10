import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
    <input type="text" [(ngModel)]="person.name">
    <h5>{{person.name}}</h5>
  `,
})
export class TwoWayBindingComponent {
  person = {
    name: 'madhu',
    age : 21
  }
}
