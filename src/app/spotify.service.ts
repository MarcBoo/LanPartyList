import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private iD = 'ef7977a3f4fb49de91d4ea757a3f1e8d';
  private k = '54f0bf1273dd46b2a377bd73c8aeb8b7';

  constructor(private http: HttpClient) {}

  authorize(){
    
  }

  searchSongs(query: string): Observable<any> {
    return this.http.get(`https://api.spotify.com/v1/search?q=${query}&type=track&limit=20`,
    { headers: { 'Authorization': 'Bearer ' + this.k } });
  }
}