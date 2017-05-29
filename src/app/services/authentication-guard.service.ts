import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot} from '@angular/router';
import { AutenticationService } from 'app/services/authentication.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(private aService: AutenticationService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.aService.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    this.aService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }
}