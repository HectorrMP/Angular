import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestGuard implements CanActivate {
  constructor(
    private router: Router,
  ) {}
  canActivate(): boolean {
    let  isLogged:boolean = false;
    this.stateService.userIsLogged().subscribe(
      (logged) => {
        isLogged = logged;
      }
    );
    if(isLogged == false){
      this.router.navigate(['/home']);
    }
    return isLogged;
  
}}
