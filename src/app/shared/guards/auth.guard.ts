import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "src/app/core/store/app.reducer";
import { AuthService } from "src/app/modules/auth/services/auth.service";
import * as sharedActions from "src/app/shared/store/shared.actions";
import Swal from "sweetalert2";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.getToken()) {
      return true;
    } else {
      this.store.dispatch(sharedActions.setNextUrl({ url: state.url }));
      Swal.fire({
        icon: "info",
        title: "Debe iniciar sesion para crear una reserva",
        showConfirmButton: false,
        timer: 3000,
      });
      this.router.navigate(["/auth/login"]);
      return false;
    }
  }
}
