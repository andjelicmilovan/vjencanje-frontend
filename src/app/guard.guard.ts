import { ServisService } from './servis.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(public cookieService:CookieService, public s:ServisService){}

  logovan = false;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!sessionStorage.getItem('user'))
      {
        this.logovan = false;
        return this.logovan;
      }else
      {
        this.logovan = true;
        return this.logovan;
      }
  }

}
