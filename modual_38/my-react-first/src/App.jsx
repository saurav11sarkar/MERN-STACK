import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singers from './Singers'
import BookStore from './BookStore'

function App() {
  const actor = ['Sakib', 'Shoriful Raj', 'Jasim', 'Rubal'];

  const singers = [
    { id: 1, name: 'Dr. Mahfuzur', age: 68 },
    { id: 2, name: 'Eva Rahman', age: 38 },
    { id: 3, name: 'Shurvo Dev', age: 58 },
    { id: 4, name: 'Pritom', age: 28 },
  ]

  const books = [
    {id:1, name: 'Physics', price: 100},
    {id:2, name: 'Math', price: 200},
    {id:1, name: 'Chemistry', price: 300},
    {id:1, name: 'Biology', price: 400},
  ]

  return (
    <>
      <h3>Vite + React</h3>

      <BookStore book={books}></BookStore>

      <p>----------X-----------</p>


      {
        singers.map(sing => <Singers singers={sing}></Singers>)
      }


      <Actor name={'saurav sarkar'}></Actor>
      {
        actor.map(actor => <Actor name={actor}></Actor>)
      }


      {/* <Todo task="Larne React" isDone={true}></Todo>
      <Todo task="Try JSX" isDone={false}></Todo> */}

      {/* <Student></Student>
      <Person></Person>
      <Developter></Developter>

      <Device name="Laptop" price="100"></Device>
      <Device name="Mobile" price="200"></Device>

      
      <StudentScore grate={10} score={7}></StudentScore>
      <StudentScore grate={20} score={40}></StudentScore>
      <StudentScore></StudentScore> */}
    </>
  )
}

const { grate, score } = { grate: '7', score: '99' };
function StudentScore({ grate = 100, score = 200 }) {
  console.log(grate, score);

  return (
    <div className='border-2 mt-2 rounded-2xl border-sky-600 p-3'>
      <h3>This is a Student Score</h3>
      <p>Class: {grate}</p>
      <p>Score: {score}</p>
    </div>
  )
}

function Device(props) {
  console.log(props)
  return (
    <h2>This device : {props.price}</h2>
  )
}

function Person() {
  const age = 24;
  const money = 20;
  const person = { name: 'Saurav', age: 20 }
  return <h3>I am a {person.name} with age : {age + money}</h3>
}

const Student = () => {
  return (
    <div className='student'>
      <p className='text-sky-500'>This is a student.</p>
      <p>Name:</p>
      <p>hi</p>
    </div>
  )

}

function Developter() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple'
  }

  return (
    <div style={developerStyle} className='rounded-2xl font-bold'>
      <h5>Devo devo</h5>
      <p>Coding:</p>
    </div>
  )
}

export default App
