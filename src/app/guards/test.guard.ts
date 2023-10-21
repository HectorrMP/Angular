import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { StateService } from '../state/state.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestGuard implements CanActivate {
  constructor(
    private router: Router,
    private stateService: StateService,
  ) {}
  canActivate(): boolean {
    let isLogged:boolean = false;
    this.stateService.isLogged().subscribe(
      (logged:boolean) => {
        isLogged = logged;
      }
    );
    if(isLogged == false){
      this.router.navigate(['/home']);
    }
    return isLogged;
  
}}
