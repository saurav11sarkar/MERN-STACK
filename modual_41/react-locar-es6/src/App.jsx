import { useEffect, useState } from 'react';
import './App.css';
import Sunglash from './components/Sunglash';
import Watch from "./components/Watch"

function App() {
  const [watch, setWatch] = useState([]);

  useEffect(() => {
    fetch('watch.json')
      .then(res => res.json())
      .then(data => setWatch(data))
  }, [])



  return (
    <>
      <h2 className='text-5xl font-bold text-center'>React</h2>
      <Sunglash></Sunglash>
      <div>
        {
          watch.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
        }
      </div>

    </>
  )
}

export default App
