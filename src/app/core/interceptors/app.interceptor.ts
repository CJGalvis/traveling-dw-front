import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from "@angular/common/http";
import { tap } from "rxjs/operators";
import { GlobalService } from "src/app/shared/services/global.service";

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  private requests: HttpRequest<any>[] = [];

  constructor(private globalService: GlobalService) {}

  removeRequest(req: HttpRequest<any>) {
    const i = this.requests.indexOf(req);
    this.requests.splice(i, 1);
    this.globalService.isLoading = this.requests.length > 0;
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.requests.push(request);
    this.globalService.isLoading = true;
    const token = "bearer";
    const updatedRequest = request.clone({
      headers: request.headers.set("Authorization", token),
    });
    return next.handle(updatedRequest).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
            this.removeRequest(request);
          }
        },
        (error) => {
          if (error instanceof HttpErrorResponse) {
            this.removeRequest(request);
          }
        }
      )
    );
  }
}
