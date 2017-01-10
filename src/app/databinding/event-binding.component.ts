import {Component, Output} from '@angular/core';
import {EventEmitter} from "@angular/common/src/facade/async";

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onClicked()">click me</button>
  `
})
export class EventBindingComponent {
  @Output('clickable')  clicked = new EventEmitter<string>();

  onClicked(){
    this.clicked.emit("it works")
  }
}
