import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Root componet</h1>
    <app-lifecycle *ngIf="!delete" [bindable]="bindValue">
      {{test}}
    </app-lifecycle>
    <br>
    <button (click)="delete = true">click to destroy</button>
    <button (click)="test = 'changed value'">change-content</button>
    <button (click)="bindValue = 2000">change-binding</button>
  `,
})
export class AppComponent{
  delete = false;
  test = "starting value"
  bindValue = 1000;
}

