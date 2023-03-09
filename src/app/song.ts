export interface Song {
    name: string;
    artists: Array<{ name: string }>;
  }
  
  export interface SongResponse {
    tracks: {
      items: Array<Song>;
    };
  }

/*
  items: [
    {
      album: [Object],
      artists: [Array],
      available_markets: [Array],
      disc_number: 1,
      duration_ms: 222514,
      explicit: true,
      external_ids: [Object],
      external_urls: [Object],
      href: 'https://api.spotify.com/v1/tracks/1be1JhmFD3qFqQ4BrDzcK6',
      id: '1be1JhmFD3qFqQ4BrDzcK6',
      is_local: false,
      name: 'Abandon Us',
      popularity: 49,
      preview_url: 'https://p.scdn.co/mp3-preview/d635ee1f93761afe973d914ea4fd0054f8d1f8b7?cid=ef7977a3f4fb49de91d4ea757a3f1e8d',
      track_number: 1,
      type: 'track',
      uri: 'spotify:track:1be1JhmFD3qFqQ4BrDzcK6'
    },.....
*/
