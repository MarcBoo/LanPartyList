import { Component, OnInit } from '@angular/core';
import { SongResponse } from '../song';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.css']
})

export class SpotifyComponent implements OnInit {
  topReadList: SongResponse[] = [];

  constructor(private http: HttpClient) { }

  //Slider
  
  max = 100;
  min = 1;
  showTicks = true;
  step = 1;
  thumbLabel = true;
  value = 25;

  getTopSongs(){
    this.http.get<SongResponse[]>('/api/test/' + this.value, { withCredentials: true }).subscribe((data: any) => {
      this.topReadList = data.items;
    });
  }

  ngOnInit(): void {
    this.getTopSongs();
  }
  }