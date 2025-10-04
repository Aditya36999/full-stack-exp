import React, { useState } from "react";
import "./App.css"; 

export default function PlayerList() {
  const [search, setSearch] = useState("");

  const players = [
    { id: 1, name: "Virat Kohli", role: "Batsman" },
    { id: 2, name: "Rohit Sharma", role: "Batsman" },
    { id: 3, name: "MS Dhoni", role: "Wicket Keeper" },
    { id: 4, name: "Hardik Pandya", role: "All Rounder" },
    { id: 5, name: "Jasprit Bumrah", role: "Bowler" },
  ];

  const filteredPlayers = players.filter(
    (player) =>
      player.name.toLowerCase().includes(search.toLowerCase()) ||
      player.role.toLowerCase().includes(search.toLowerCase()) ||
      player.id.toString().includes(search)
  );

  return (
    <div className="player-container">
      <h1 className="title">Player List</h1>

      <input
        type="text"
        placeholder="Search by ID, Name or Role..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      <ul className="player-list">
        {filteredPlayers.length > 0 ? (
          filteredPlayers.map((player) => (
            <li key={player.id} className="player-item">
              <span className="player-id">{player.id}</span>
              <span className="player-name">{player.name}</span>
              <span className="player-role">{player.role}</span>
            </li>
          ))
        ) : (
          <p className="no-result">No players found.</p>
        )}
      </ul>
    </div>
  );
}