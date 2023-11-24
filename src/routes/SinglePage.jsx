import React from 'react';
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { animals, birds } from '../animalsList';
// import {likes} from '../routes/animals';


const SinglePage = (props) => {
  const params = useParams();
  const navigate = useNavigate();
//   const location = useLocation();

  const imageUrl = `https://source.unsplash.com/400x400/?${name}`;

  let animalArray = props[params.category];
  let data = animalArray.find((animal) => animal.name.toLowerCase() == params.name);
//   const animal = animals.find((el) => el.name.toLowerCase() === name.toLowerCase());
//   const bird = birds.find((el) => el.name.toLowerCase() === name.toLowerCase());
//   const likes = new URLSearchParams(location.search).get('likes') || 0;

//   if (!animal) {
//     return (
//         <main>
//         <div>
//           <img src={imageUrl} alt={bird.name} />
//           <h1>About {bird.name.toUpperCase()}</h1>
//           <p>Description will be here</p>
//           <p>Likes: {bird.likes}</p>
//           <button onClick={() => navigate(-1)}>Go back</button>
//         </div>
//       </main>
//     )
// }
  return (
    <main>
      <div>
        <img src={imageUrl} alt={data.name} />
        <h1>About {data.name.toUpperCase()}</h1>
        <p>Description will be here</p>
        <p>Likes: {data.likes}</p>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    </main>
  );
};

export default SinglePage;


    
  
    
    
    