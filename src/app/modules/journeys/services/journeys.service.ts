import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JourneysService {

  private API_URL: string = environment.API_URL;

  constructor(private httpClient: HttpClient) { }

  getJourneys(query: any) : Observable<any> {
    const url = `${this.API_URL}/journeys`;
    return this.httpClient.post(url, query);
  }
}
