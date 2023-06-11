import React, { useState, useEffect } from 'react';
import gameData from '../game-data.json';

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
      <div className="search-bar">
        <input type="text" id="search-input" placeholder="Search for a game..." value={searchTerm} onChange={handleSearch} />
      </div>
      <div className="game-list">
        {filteredGames.map(game => (
          <div className="game-card" key={game.id}>
            <img className="game-thumbnail" src={getGameImagePath(game.id)} alt={game.title} />
            <h3>{game.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameList;
