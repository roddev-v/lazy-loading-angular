import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private route: Router) {
      }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    return this.route.createUrlTree(['catalog']);
  }

}

@Injectable()
export class LoadGuard implements CanLoad {

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree {
    return false;
  }

}
