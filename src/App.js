import React from 'react';
import PlayersList from './PlayersList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">
      <h1 className="text-center mt-4">Cartes des Joueurs FIFA</h1>
      <PlayersList />
    </div>
  );
};

export default App;
