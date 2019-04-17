import React from "react";

const Quote = ({ quote, character, image }) => (
  <figure>
    <img src={image} alt={character} style={{height: 250}}/>
      <h2>{quote}</h2>
    <figcaption>
      <cite>{character}</cite>
    </figcaption>
  </figure>
);


export default Quote;