import './App.css'
import Banner from './compoment/Heder/Banner'
import OurRecipes from './compoment/MainManu/OurRecipes'
import NavBar from './compoment/NavBar/NavBar'
import Preparing from './compoment/MainManu/Preparing'
import { useState } from 'react'

function App() {
  const [preparing, setPreparing] = useState([]);


  const heandlePreparing = (recipe) => {
    const newPreparing = [...preparing, recipe]
    setPreparing(newPreparing)
  }


  return (
    <>
      <div>
        <NavBar></NavBar>
        <Banner></Banner>

        <div className="text-center px-10 my-4">
          <h2 className="text-2xl font-bold mb-3">Our Recipes</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat odit sunt ut commodi culpa officia corrupti impedit. Possimus, reiciendis vel! Molestias architecto dolorum nesciunt illo qui ipsam. Nisi, nesciunt blanditiis!</p>
        </div>

        <div className='grid grid-cols-2 gap-2 justify-center'>
          <OurRecipes heandlePreparing={heandlePreparing}></OurRecipes>
          <Preparing preparing={preparing}></Preparing>
        </div>

      </div>
    </>
  )
}

export default App
