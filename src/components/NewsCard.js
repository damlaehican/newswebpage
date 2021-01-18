import React from 'react';
import './NewsCard.css';

const NewsCard = (props) => {
  return (
    <div className="NewsCard">
      <img src={props.image} className="Image" />
      <h1 key={1}>{props.title}</h1>
      <h2>{props.newSource}</h2>
      <a href={props.url}>Haberin Kaynağına Git</a>
    </div>

  )
}
export default NewsCard;