import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <div class="container container-fluid">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent{
  delete = false;
  test = "starting value"
  bindValue = 1000;
}

