import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-a',
  template: `
    <div>
      <input type="text" #input>
      <button (click)="onLog(input.value)">Log</button>
      <button (click)="onStore(input.value)">Store</button>
      <button (click)="onSend(input.value)">Send</button>
    </div>
    <hr>
    <div>
        <button (click)="onGet()">Refresh Storage</button>
        <h3>Storage</h3>
        <ul>
            <li *ngFor="let item of items">{{item}}</li>
        </ul>
        <h3>Received Value</h3>
        <p>{{value}}</p>
    </div>
  `,
  styles: []
})
export class CmpAComponent implements OnInit {
  value = '';
  items: string[] = [];

  onLog(value: string) {

  }

  onStore(value: string) {

  }

  onGet() {

  }

  onSend(value: string) {

  }

  ngOnInit(){

  }
}
