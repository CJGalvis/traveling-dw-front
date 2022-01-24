import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { AppState } from "src/app/core/store/app.reducer";
import { AuthService } from "../../services/auth.service";
import * as authActions from "../../store/auth.actions";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit, OnDestroy {
  public registerForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    lastname: new FormControl("", [Validators.required]),
    identificationType: new FormControl("", [Validators.required]),
    identificationNumber: new FormControl("", [Validators.required]),
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

  register() {
    if (this.registerForm.invalid) return;
    this.authService.register({ ...this.registerForm.value }).subscribe(
      (data: any) => {
        this.authService.setToken(data.token);
        this.store.dispatch(authActions.setToken({ token: data.token }));
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
