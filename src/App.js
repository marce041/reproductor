import React from 'react';
import Search from './Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
library.add(faSpotify);

function App() {
  const styles = {
    marginLeft: '20px' // Establecer el margen izquierdo en 20px
  };
  return (
    <div >
      
      <h1 style={styles}><FontAwesomeIcon icon={faSpotify}/> Spotify Player</h1>
      <Search />
    </div>
  );
}

export default App;
