import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { SpotifyService } from '../spotify.service';
import { SongResponse } from '../song';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.css']
})

export class SpotifyComponent implements OnInit {
  topReadList: SongResponse[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('/api/test', { withCredentials: true }).subscribe((data: any) => {
      this.topReadList = data;
    });
  }
  }