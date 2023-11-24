import React from 'react';
import Card from '../components/Card';
import Search from '../components/Search';
import { useParams } from 'react-router-dom';

function CategoryPage (props) {
  const params = useParams();
  const category = params.category;
  const filteredAnimalList = props[category].filter(
    (animal) =>
animal.name.toLowerCase().includes(props.search.toLowerCase()))

    return (  
        <>  
     <div><Search searchHandler={props.searchHandler}/></div>
      <main>
      <h1>{category.toUpperCase()}:</h1> 
      
      {filteredAnimalList.length === 0 ? (
          <h2>No results</h2>
        ) : (
<div className="cards">
           {filteredAnimalList.map((animal, index) => 
            (<Card key={index} 
              {...animal}
              click={() => props.removeHandler(animal.name, category)}
              plus={() => props.likesHandler(animal.name, "plus", category)}
              minus={() => props.likesHandler(animal.name, "minus", category)}
            />
          ))}
        </div>
        )}
      </main>
      
       </> 
    );
}

export default CategoryPage;
