import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import User from './user'
import Friends from './Friends'
import Post from './Post'


function App() {

  function handelClick() {
    alert('Button Clicked');
  }

  function addSum(num) {
    alert(num + 10);
  }

  return (
    <>
      <div>
        <ol className='list-decimal flex gap-10 justify-center items-center'>
          <li>Componenents</li>
          <li>JSX</li>
          <li>Props</li>
          <li>Event Handler</li>
          <li>State</li>
          <li>Load</li>
        </ol>

        <br />

        <hr />

        <br />

        <Post></Post>
      </div>
      {/* <h1 className='mb-5 uppercase font-mono'>React</h1>
      <Friends></Friends>
      <br />
      <User></User>
      <br />
      <Team></Team>

      <Counter></Counter>
      <br />

      <div className='flex gap-3'>
        <button onClick={handelClick}>Click Me</button>
        <button onClick={() => addSum(20)}>Add Sum</button>
      </div> */}


    </>
  )
}

export default App
