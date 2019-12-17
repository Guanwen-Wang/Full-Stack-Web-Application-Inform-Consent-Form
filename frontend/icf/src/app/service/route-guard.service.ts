import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthService } from './hardcoded-auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {
  constructor(private hardcodedAuthService: HardcodedAuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardcodedAuthService.isUserLoggedIn() || this.hardcodedAuthService.isAdminLoggedIn()) return true;
    this.router.navigate(['']); // return login page
    return false;
  }

  // canActivateAdmin(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   if (this.hardcodedAuthService.isAdminLoggedIn()) return true;
  //   this.router.navigate(['admin']); // return login page
  //   return false;
  // }
}
