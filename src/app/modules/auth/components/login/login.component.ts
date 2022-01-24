import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { AppState } from "src/app/core/store/app.reducer";
import { AuthService } from "../../services/auth.service";
import * as authActions from "../../store/auth.actions";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm = new FormGroup({
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  });

  public showError: boolean;
  public messageError: string;
  private url: string;
  private subscription: Subscription;

  constructor(
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router
  ) {}
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.store.select("shared").subscribe((state: any) => {
      if (state.url) {
        this.url = state.url;
      }
    });
  }

  login() {
    if (this.loginForm.invalid) return;
    const data = {
      email: this.loginForm.get("email").value,
      password: this.loginForm.get("password").value,
    };
    this.authService.login(data).subscribe(
      (login: any) => {
        this.authService.setToken(login.token);
        this.store.dispatch(authActions.setToken({ token: login.token }));
        if (this.url) {
          this.router.navigate([this.url]);
        } else {
          this.router.navigate(["/journeys/search"]);
        }
      },
      (error: any) => {
        this.showError = true;
        this.messageError = error.error.message;
      }
    );
  }
}
