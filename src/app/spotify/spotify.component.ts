import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Spotify } from '../spotify';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.css']
})

export class SpotifyComponent implements OnInit {

  lists!: Spotify[];
  list: Spotify = new Spotify();
  constructor(private spotifyService: SpotifyService, private router: Router,) { }

  ngOnInit() {
    this.spotifyService.getLists().subscribe(data => {
      console.log(data);
      this.lists = data;
    })
  }
  spotifyDetails(id: number) {
    this.router.navigate(['users', id]);
    console.log(id);

  } 

}