import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { SpotifyService } from '../spotify.service';
import { SongResponse, Song } from '../song';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.css']
})

export class SpotifyComponent implements OnInit {
  topReadList: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/test', { withCredentials: true }).subscribe((data: any) => {
      this.topReadList = data;
    });
  }
  }