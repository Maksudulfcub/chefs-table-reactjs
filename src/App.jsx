import { useState } from 'react'
import './App.css'
import Recipes from './components/Recipes/Recipes'
import Sidebar from './components/Sidebar/Sidebar'
import { toast } from 'react-toastify';

function App() {

  const [wantToCook, setWantToCook] = useState([]);
  const [cookItem, setCookItem] = useState(0);

  const notify = () => toast("Recipe already exists ! Please select another one.");

  const handleWantToCook = recipe => {
    if (wantToCook.includes(recipe)) {
      notify()
    }
    else {
      const newCookItem = [...wantToCook, recipe];
      setWantToCook(newCookItem);
      setCookItem(cookItem + 1);
    }
  }

  return (
    <div className='max-w-6xl mt-10 mx-auto'>

      {/* Title */}
      <div className='text-center mb-10'>
        <h1 className='text-4xl font-bold'>Chef's Table with ReactJS</h1>
        <p className='text-sm font-semibold text-gray-400 mt-3'>Explore our all recipes</p>
      </div>

      {/* Main content */}
      <div className='lg:flex gap-10'>
        <Recipes
          handleWantToCook={handleWantToCook}
        ></Recipes>
        <Sidebar wantToCook={wantToCook} cookItem={cookItem}></Sidebar>
      </div>

    </div>
  )
}

export default App
