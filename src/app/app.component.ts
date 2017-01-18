import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container container-fluid">
      <app-data-driven></app-data-driven>
    </div>
  `,
})
export class AppComponent{
  delete = false;
  test = "starting value"
  bindValue = 1000;
}

