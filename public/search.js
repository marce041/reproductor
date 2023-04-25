import React, { useState } from 'react';
import axios from 'axios';



function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [song, setSong] = useState(null);
  const SPOTIFY_CLIENT_ID = '4005ac4ef07443e5849876966a63375f';


  const handleSearch = async () => {
    const { data } = await axios.get(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (data && data.tracks && data.tracks.items && data.tracks.items.length > 0) {
      setSong(data.tracks.items[0]);
    }
  };

  return (
    <div>
      <input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {song && <div>{song.name} by {song.artists[0].name}</div>}
    </div>
  );
}

export default Search;
