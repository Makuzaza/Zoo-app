import React, { useState } from 'react'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import CategoryPage from './routes/CategoryPage';
import Root from './routes/Root';
import ErrorPage from './routes/Error';
import { animals, birds, fishes, insects } from './animalsList';
import About from './routes/About';
import SinglePage from './routes/SinglePage';

function App() {
  const [zoo, setZoo] = useState({animals: animals, birds: birds, fishes: fishes, insects: insects});
  const [search, setSearch] = useState('');

  const removeHandler = (name, category) => {
    const updatedArray = zoo[category].filter((animal) => animal.name !== name); 
    setZoo({ ...zoo, [category]: updatedArray});
  };

  const cleanHandler = () => {
    setSearch('')
    }

  const searchHandler = (event) => {
    setSearch(event.target.value);
  }

  const likesHandler = (name, action, category) => {
    const updatedArray = zoo[category].map((animal) => {
      if (animal.name === name) {
        if (action === "plus") {
          return {...animal, likes: animal.likes + 1};
        } else {
          return { ...animal, likes: animal.likes - 1};
        }
      } else {
        return animal;
  }
}); 
setZoo({ ...zoo, [category]: updatedArray })
};

const router = createBrowserRouter([
  { path: '/', element:<Root cleanHandler={cleanHandler}/>, 
  errorElement: <ErrorPage/>, children: [
    { path: '/', element: <Home/> },
    { path: ':category', 
    element: (<CategoryPage 
      {...zoo}
      searchHandler={searchHandler} 
      search={search} 
      removeHandler={removeHandler}
      likesHandler={likesHandler}/>),
    },
    { path: ":category/:name", 
    element: (<SinglePage 
    {...zoo}/>)},
    { path: '/about', 
    element: <About />}
  ]}
]);

  return (
<div>  
<RouterProvider router = {router} />
</div>
  );
}

export default App;