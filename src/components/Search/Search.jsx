import './Search.css';
import axios from "axios";
import { useState } from "react";
import Input from '../Input/Input';
import Button from '../Button/Button';
import TrackCard from '../TrackCard/TrackCard';
import SpotifyWebApi from "spotify-web-api-js";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loading from '../Loading/Loading';

const clientId = "4005ac4ef07443e5849876966a63375f";
const clientSecret = "3cdd40bb1b3543cdb7fc06c50c31231f";

const spotifyApi = new SpotifyWebApi();

const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [fetchStatus, setFetchStatus] = useState('idle')

    function handleSearch(event) {
        event.preventDefault(); 

        setFetchStatus('pending')
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
        }).finally(()=>{
            setFetchStatus('fullfield')
        })
    }

    if (fetchStatus === 'pending'){
        return <Loading/>
    }
    return (
        <div >
            <form onSubmit={handleSearch}>
                <Input
                    type="text"
                    placeholder="Busca una canción..."
                    required
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                />
                <Button type="submit"><FontAwesomeIcon icon={faSearch} /> Buscar </Button>
            </form>

            <ul className='track-list'>
                {searchResults.map( track => 
                    <TrackCard
                        key={ track.id }
                        img={ track.album.images[0].url }
                        name={ track.name }
                        artistName={ track.artists[0].name }
                        previewUrl={ track.preview_url }
                    />
                )}
            </ul>
        </div>
    );
}

export default Search;
