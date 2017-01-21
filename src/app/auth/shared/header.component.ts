import { Component, OnInit } from '@angular/core';
import {AuthSerice} from "./auth.service";

@Component({
  selector: 'app-header',
  template: `
    <header>
            <nav class="navbar navbar-default">
                <div class="container-fluid">
        
                    <ul class="nav navbar-nav">
        
                        <li><a routerLink="signUp">Sign Up</a></li>
                        <li><a routerLink="signIn">Sign In</a></li>
                        <li><a routerLink="protected">Protected</a></li>
        
                    </ul>
                    <ul class="nav navbar-nav navbar-right" *ngIf="isAuth()">
        
                        <li><a (click)="onLogOut()">Logout</a></li>
                    </ul>
                </div><!-- /.container-fluid -->
        
            </nav>
        
        </header>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService:AuthSerice
  ) { }

  ngOnInit() {
  }

  isAuth(){
    return this.authService.isAuth()
  }

  onLogOut(){
    this.authService.logOut();
  }
}
