
import {Injectable} from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {AuthSerice} from "./auth.service";


@Injectable()
export class AuthGuard implements CanActivate{
    constructor(
      private authService:AuthSerice
    ){}

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean> | boolean{
      return this.authService.isAuth()?true:false;
    }
}
