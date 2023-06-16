import React, { useState, useEffect } from 'react';
import gameData from '../game-data.json';
import { runMachine } from '../services/api';

const requireImage = require.context('../images/games', true);

const GameList = () => {
  const [games, setGames] = useState(gameData.games);
  const [filteredGames, setFilteredGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Filter games based on search term
    const filteredGames = games.filter(game =>
      game.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredGames(filteredGames);
  }, [games, searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const getGameImagePath = (gameId) => {
    return requireImage(`./game-${gameId}.png`);
  };  

  return (
    <div>

      <div className="searchBar">
        <label>Find your favorite game: </label>
        <input type="text" id="search-input" placeholder="Typing here..." value={searchTerm} onChange={handleSearch} />
      </div>

      <div className="gameList">
        
      {/* <main className="casinoStart">
        <img src={logo} className="casinoLogo" alt="logo" />
        <button onClick={runMachine}>Play Indication</button>
      </main> */}
        {filteredGames.map(game => (
          <a href={runMachine} className="gameList-card" key={game.id}>
            <img className="gameList-thumbnail" src={getGameImagePath(game.id)} alt={game.title} />
            <h3>{game.title}</h3>
          </a>
        ))}
      </div>

    </div>
  );
};

export default GameList;
