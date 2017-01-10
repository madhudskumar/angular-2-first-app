import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onClicked()">click me</button>
  `
})
export class EventBindingComponent {
  onClicked(){
    alert("it worked");
  }
}
