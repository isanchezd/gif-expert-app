import { useState } from 'react';
import AddCategory from './components/AddCategory/AddCategory';
import GifGrid from './components/GifGrid/GifGrid';
import 'animate.css';
import './App.css';

const App = () => {
  const [categories, setCategories] = useState(['Dragon Ball']);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}></AddCategory>
      <hr />

      <ul>
        {categories.map((category, index) => (
          <GifGrid key={index} category={category}></GifGrid>
        ))}
      </ul>
    </>
  );
};

export default App;
