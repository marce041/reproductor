import './App.css'
import React from 'react';
import Search from './components/Search/Search';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faSpotify);

function App() {
  return (
    <div className='app-container'>
      <h1 className='app-container-logo'><FontAwesomeIcon icon={faSpotify}/> Spotify Player</h1>
      <Search/>
    </div>
  );
}

export default App;
