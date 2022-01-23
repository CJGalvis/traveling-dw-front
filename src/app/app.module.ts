import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatNativeDateModule, MAT_DATE_LOCALE } from "@angular/material/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

//NGRX
import { StoreModule } from "@ngrx/store";
import { appReducers } from "./core/store/app.reducer";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "src/environments/environment";

//Loading
import { NgxLoadingModule } from "ngx-loading";
import { AppInterceptor } from "./core/interceptors/app.interceptor";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatNativeDateModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    NgxLoadingModule.forRoot({}),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true,
    },
    { provide: MAT_DATE_LOCALE, useValue: "es-ES" },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
