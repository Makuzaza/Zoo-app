import Card from '../components/Card';
import Search from '../components/Search';
import { useParams } from 'react-router-dom';

function CategoryPage (props) {
  const params = useParams();
  let category = params.category;
  // const filteredAnimalList = animalList.filter(animal =>
  //    animal.name.toLowerCase().includes(search.toLowerCase()));

    return (  
        <>  
     {/* <div><input type="text" placeholder='Search ...' onChange={searchHandler}></input></div> */}
     <div><Search/></div>
      <main>
      <h1>{category}:</h1> 
      
      {/* {filteredAnimalList.length === 0 ? (
          <h2>No results</h2>
        ) : (
        <div className="cards">
           {filteredAnimalList.map((animal, index) => 
            (<Card key={index} 
              {...animal}
              isBird={false}
              click={() => removeHandler(animal.name)}
              plus={() => likesHandlerAnimal(animal.name, "plus")}
              minus={() => likesHandlerAnimal(animal.name, "minus")}
              name={animal.name} 
              likes={animal.likes} 
            />
          ))}
        </div>
         )} */}
<div className="cards">
           {props[category].filter(
            (animal) =>
     animal.name.toLowerCase().includes(props.search.toLowerCase()))
           .map((animal, index) => 
            (<Card key={index} 
              {...animal}
              click={() => props.removeHandler(animal.name, category)}
              plus={() => props.likesHandler(animal.name, "plus", category)}
              minus={() => props.likesHandler(animal.name, "minus", category)}
            />
          ))}
        </div>

      </main>
      
       </> 
    );
}

export default CategoryPage;

  {/* <div className='parts'> */}
        {/* <button onClick={() => switchType('animals')}><h1>Animals</h1></button> */}
        {/* <button onClick={() => switchType('birds')}><h1>Birds</h1></button> */}
      {/* </div> */}

      // import Card from '../components/Card';

      // function Animals({ searchHandler, animalList, search, removeHandler, likesHandlerAnimal }) {
      //   const filteredAnimalList = animalList.filter(animal =>
      //     animal.name.toLowerCase().includes(search.toLowerCase()));
      
      //   return (
      //     <>
      //       <div><input type="text" placeholder='Search ...' onChange={searchHandler}></input></div>
      //       <main>
      //         <h1>Animals:</h1>
      
      //         {filteredAnimalList.length === 0 ? (
      //           <h2>No results</h2>
      //         ) : (
      //           <div className="cards">
      //             {filteredAnimalList.map((animal, index) =>
      //               (<Card key={index}
      //                 {...animal}
      //                 category="animal"
      //                 click={() => removeHandler(animal.name)}
      //                 plus={() => likesHandlerAnimal(animal.name, "plus")}
      //                 minus={() => likesHandlerAnimal(animal.name, "minus")}
      //                 name={animal.name}
      //                 likes={animal.likes}
      //               />
      //               ))}
      //           </div>
      //         )}
      //       </main>
      //     </>
      //   );
      // }
      
      // export default Animals;
