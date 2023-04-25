import React, { useState, useEffect } from "react";
import axios from "axios";
import SpotifyWebApi from "spotify-web-api-js";
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const clientId = "4005ac4ef07443e5849876966a63375f";
const clientSecret = "3cdd40bb1b3543cdb7fc06c50c31231f";

const spotifyApi = new SpotifyWebApi();

function Search() {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    

function handleSearch(event) {
    event.preventDefault();

    axios("https://accounts.spotify.com/api/token", {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
        },
        data: "grant_type=client_credentials",
        method: "POST",
    })
        .then((response) => {
            const accessToken = response.data.access_token;
            spotifyApi.setAccessToken(accessToken);
            spotifyApi.searchTracks(searchQuery).then((response) => {
                console.log("search results:", response.tracks.items);
                setSearchResults(response.tracks.items);
            });
        })
        .catch((error) => {
            console.log("error:", error);
        });
}
const styles = {
    backgroundColor: 'green',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginLeft: '10px'
};
const inputStyles = {
    width: '60%', // Ajustar el ancho del input
    padding: '10px',
    fontSize: '16px',
    marginLeft: '20px',
    borderRadius: '10px'
};
return (
    <div >
        <form onSubmit={handleSearch}>
            <input
                className="form-control"

                type="text"
                placeholder="Busca una canción..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                style={{ ...inputStyles }}
            />
            <button type="submit" style={styles}><FontAwesomeIcon icon={faSearch} /> Buscar</button>
        </form>

        <ul>
            {searchResults.map((track) => (
                <ul className="track-list">
                    {searchResults.map((track) => (
                        <div className="track-item" key={track.id}>
                            <img src={track.album.images[0].url} alt={track.name} />
                            <p>{track.name}</p>
                            <p>{track.artists[0].name}</p>
                            <audio src={track.preview_url} controls />
                        </div>
                    ))}
                </ul>

            ))}
        </ul>
    </div>
);
}

export default Search;
