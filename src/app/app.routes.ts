import {Routes, RouterModule} from "@angular/router";
import {SignupComponent} from "./auth/unprotected/signup.component";
import {SigninComponent} from "./auth/unprotected/signin.component";
import {ProtectedComponent} from "./auth/protected/protected.component";
import {AuthGuard} from "./auth/shared/auth.guard";

const APP_ROUTES:Routes = [
  {
    path:'',
    redirectTo:"/signUp",
    pathMatch:'full'
  },
  {
    path:'signUp',
    component:SignupComponent
  },
  {
    path:'signIn',
    component:SigninComponent
  },
  {
    path:'protected',
    component:ProtectedComponent,
    canActivate:[AuthGuard]
  }
]

export const APP_ROUTES_MODULE = RouterModule.forRoot(APP_ROUTES);
