export interface Song {
    name: string;
    artists: Array<{ name: string }>;
  }
  
  export interface SongResponse {
    tracks: {
      items: Array<Song>;
    };
  }