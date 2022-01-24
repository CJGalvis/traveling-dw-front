import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from "../models/User";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private API_URL: string = environment.API_URL;

  constructor(private httpClient: HttpClient) {}

  register(data: User): Observable<any> {
    const url = `${this.API_URL}/auth/register`;
    return this.httpClient.post(url, data);
  }

  login(data: any): Observable<any> {
    const url = `${this.API_URL}/auth/login`;
    return this.httpClient.post(url, data);
  }
}
