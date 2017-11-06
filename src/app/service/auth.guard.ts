import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(
    public router:Router,
    public authService:AuthService
  ) {}
  
  canActivate() {
    if(localStorage.getItem('usuario')){
      return true;
    }else{
      this.router.navigate(['/home'])
      return false;
    }
  }
}