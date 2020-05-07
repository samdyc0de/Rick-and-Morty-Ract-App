import React from "react";

export default function Cards({ character }) {
  return (
    <div className="col-md-4 my-4">
      <div className="card">
        <img src={character.image} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title"> {character.name}</h5>
          <ul>
            <li>Status: {character.status}</li>
            <li>Specie: {character.species}</li>
            <li>Gender: {character.gender}</li>
            <li>Origin: {character.origin.name}</li>
            <li>location {character.location.name} </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
