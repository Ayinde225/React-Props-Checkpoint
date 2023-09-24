import React from "react";
import Player from "./Player";
import joueurs from "./joueurs";

const PlayersList = () => {
  return (
    <div className="container">
      <div className="card-container">
        {joueurs.map((joueur, index) => (
          <div className="card" key={index}>
            <Player {...joueur} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayersList;
