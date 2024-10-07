import './App.css'
import LineChart from './compoments/Linechart/LineChart'
import NavBar from './compoments/NavBar/NavBar'
import Phones from './compoments/phones/Phones'
import PriceOptionDetali from './compoments/PriceOption/PriceOptionDetali'


function App() {

  return (
    <>
    <NavBar></NavBar>
    <h2 className='bg-red-500 p-4 text-3xl font-bold rounded-lg'>Hello World</h2>
    <PriceOptionDetali></PriceOptionDetali>
    <br />
    <LineChart></LineChart>
    <Phones></Phones>
    </>
  )
}

export default App
