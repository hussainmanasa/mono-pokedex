import React from "react";
import "./Card.css";

interface cardProps {
  name: string;
  height?: number;
  weight?: number;
  location?: string;
  images?: object;
  abilities?: [];
}

const Card = (props: cardProps) => {
  const { name, height, weight, location, images, abilities } = props;
  return (
    <div className="card">
      <img className="pokemon-img" src={images?.["front_shiny"]} />
      <h2 className="name">{name}</h2>
      <div className="physical-measurements">
        <div>
          <span>
            <b>Height:</b>
          </span>
          <span>{height}</span>
        </div>

        <div>
          <span>
            <b>Weight:</b>
          </span>
          <span>{weight}</span>
        </div>
      </div>

      <div className="location">
        <div>
          <span>
            <b>Location:</b>
          </span>
          <a target="_blank" href={location}>
            {location}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
