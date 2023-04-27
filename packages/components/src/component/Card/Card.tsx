import React from "react";
import "./Card.css";
import { AbilityProp, CardProps } from "./Card.types";

const Card = (props: CardProps) => {
  const { name, height, weight, location, images, abilities } = props;
  return (
    <div className="card">
      <img className="pokemon-img" src={images?.["front_shiny"]} />
      <h2 className="name">{name}</h2>
      <div className="physical-measurements">
        <div>
          <span>
            <b>Height: </b>
          </span>
          <span>{height}</span>
        </div>

        <div>
          <span>
            <b>Weight: </b>
          </span>
          <span>{weight}</span>
        </div>
      </div>

      <div className="location">
        <div>
          <span>
            <b>Location: </b>
          </span>
          <a target="_blank" href={location}>
            {location}
          </a>
        </div>
      </div>

      <div className="abilities">
        <div>
          <b>Abilities: </b>
        </div>
        <ul className="abilities-list">
          {React.Children.toArray(
            abilities?.map((ability: AbilityProp) => (
              <li>
                <span>{ability?.ability?.name}: </span>
                <a href={ability?.ability?.url} target="_blank">
                  {ability?.ability?.url}
                </a>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Card;
