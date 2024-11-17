import React from 'react';
import { useParams, useNavigate } from "react-router-dom";

const SinglePage = (props) => {
  const params = useParams();
  const navigate = useNavigate();

  const imageUrl = `https://picsum.photos/400/400?random=${params.name.replace(/_/g, ' ')}`;

  let animalArray = props[params.category];
  let data = animalArray.find((animal) => animal.name.toLowerCase() == params.name.replace(/_/g, ' ').toLowerCase());

  return (
    <main>
      <div>
        <img className="img_singlepage" src={imageUrl} alt={data.name} />
        <h2 className='font_singlepage'>About {data.name.toUpperCase()}</h2>
        <p className='desc'>Description will be here</p>
        <h2 className='likes_single'>Likes: {data.likes}</h2>
        <button className='button_singlepage' onClick={() => navigate(-1)}>Go back</button>
      </div>
    </main>
  );
};

export default SinglePage;


    
  
    
    
    