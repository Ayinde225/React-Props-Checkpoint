import React from "react";
import "./Player.css";

const Player = ({ nom, equipe, nationalite, numeroMaillot, age, poste, taille, imageURL }) => {
  return (
    <div className="card">
      <img src={imageURL} className="card-img-top" alt={nom} />
      <div className="card-body">
        <h5 className="card-title">
          {nom.split("").map((letter, index) => (
            <span key={index} className="letter">
              {letter}
            </span>
          ))}
        </h5>
        <p className="card-text">Équipe : {equipe}</p>
        <p className="card-text">Nationalité : {nationalite}</p>
        <p className="card-text">Numéro de maillot : {numeroMaillot}</p>
        <p className="card-text">Âge : {age} ans</p>
        <p className="card-text">Poste : {poste}</p>
        <p className="card-text">Taille : {taille} cm</p>
      </div>
    </div>
  );
};

export default Player;
