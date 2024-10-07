import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {
  const coffees = useLoaderData();
  const[users, setUsers] = useState(coffees)

  return (
    <>
      <h1 className='text-3xl text-center font-semibold text-purple-600'>Hot Hot Cold Coffee</h1>
      <div className='grid md:grid-cols-2 gap-3'>
        {
          users.map(coffee =><CoffeeCard users={users} setUsers={setUsers} key={coffee._id} coffee={coffee}></CoffeeCard>)
        }
      </div>
     
    </>
  )
}

export default App;
 