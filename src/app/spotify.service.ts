import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  public baseUrl = "https://api.spotify.com";

  constructor(private httpClient: HttpClient) { }

  public getLists(): Observable<any> {

    return this.httpClient.get(this.baseUrl);
  }
}
