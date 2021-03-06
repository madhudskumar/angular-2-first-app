import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PropertyBindingComponent } from './databinding/property-binding.component';
import { EventBindingComponent } from './databinding/event-binding.component';
import { TwoWayBindingComponent } from './databinding/two-way-binding.component';
import { LifecycleComponent } from './lifecycle.component';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { ServiceComponent } from './service/service.component';
import { CmpAComponent } from './service/cmp-a.component';
import { CmpBComponent } from './service/cmp-b.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { DataDrivenComponent } from './forms/data-driven/data-driven.component';
import { PipesComponent } from './pipes/pipes.component';
import { DoublePipePipe } from './pipes/double-pipe.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { HttpComponent } from './http/http.component';
import { ProtectedComponent } from './auth/protected/protected.component';
import { SharedComponent } from './auth/shared/shared.component';
import { UnprotectedComponent } from './auth/unprotected/unprotected.component';
import { HeaderComponent } from './auth/shared/header.component';
import { SigninComponent } from './auth/unprotected/signin.component';
import { SignupComponent } from './auth/unprotected/signup.component';
import {APP_ROUTES_MODULE} from "./app.routes";
import {AuthSerice} from "./auth/shared/auth.service";
import {AuthGuard} from "./auth/shared/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    LifecycleComponent,
    DirectivesComponent,
    HighlightDirective,
    UnlessDirective,
    ServiceComponent,
    CmpAComponent,
    CmpBComponent,
    TemplateDrivenComponent,
    DataDrivenComponent,
    PipesComponent,
    DoublePipePipe,
    FilterPipe,
    HttpComponent,
    ProtectedComponent,
    SharedComponent,
    UnprotectedComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTES_MODULE
  ],
  providers: [AuthSerice, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
