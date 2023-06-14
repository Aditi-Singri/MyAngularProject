import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router:Router, private loginService:LoginService)
{

}  canActivate(): boolean  {
      // if(!this.loginService.loggedIn)
      //   this.router.navigate(['Login']);
      return this.loginService.loggedIn;
  }
  
}
