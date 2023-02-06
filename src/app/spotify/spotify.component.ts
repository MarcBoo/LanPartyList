import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { SpotifyService } from '../spotify.service';
import { SongResponse, Song } from '../song';


@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.css']
})

export class SpotifyComponent implements OnInit {
  query = '';
  songs: Song[] = [];

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit() {
    
  }

  searchSongs() {
    this.spotifyService.searchSongs(this.query)
        .subscribe(res =>{
          console.log(res.tracks.items)
        })
  }

  /*
  searchSongs() {
    this.spotifyService.searchSongs(this.query).subscribe((data: SongResponse) => this.songs)
        this.songs = this.songs;
      }
     this.spotifyService.searchSongs(this.query).subscribe((data: SongResponse) => {
      this.songs = data.tracks; this.songs = data.tracks.items; 
    }); */
  }