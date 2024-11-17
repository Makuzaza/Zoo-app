import React from 'react';
import { Link } from 'react-router-dom';
import dislike from '../assets/broken-heart.png';
import like from '../assets/heart.png';

const Card = ({ name, click, minus, plus, likes }) => {
  const imageUrl = `https://picsum.photos/400/400?random=${name}`;

  return (
    <div className='card'>
      <div className="animal-image">
        <img className="animal-image" src={imageUrl} alt={name} /> 
      </div> 
      <h2 className="title">{name.toLowerCase()}</h2>

      <button  className="close" onClick={click}>
        <span className="material-symbols-outlined">close</span>
      </button>
    
    <div className="line_heart">
      
      <div className="count">
        <button className="minus" onClick={minus}>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
          <span className="material-symbols-outlined">heart_minus</span>
        </button>  
      </div>
      
      {likes >= 0 ? (
          <div className={`likes  ${likes === 0 ? 'grayscale' : ''}`}>
            <img className="heart" src={like} alt="heart" />
            {likes}
          </div>
        ) : (
          <div className='likes'>
            <img className="heart" src={dislike} alt="broken heart" />
            {likes}
          </div>
        )}
      
      <div className='count'>
        <button className="plus" onClick={plus}>
          <span className="material-symbols-outlined">heart_plus</span>
        </button>
      </div>
      <div className='see'>
      <Link to={`${name.toLowerCase().replace(/\s+/g, '_')}`}>
          See more...
        </Link>
        </div>

    </div>
    </div>
  );
};

export default Card;
