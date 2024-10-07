import React from 'react'
import Header from '../shared/Header/Header'
import NavBar from '../shared/NavBar/NavBar'
import LeftSideNav from '../shared/LeftSideNav/LeftSideNav'
import RightSideNav from '../shared/RightSideNav/RightSideNav'
import BrackNews from './BrackNews'
import { useLoaderData } from 'react-router-dom'
import NewsCard from './NewsCard'

const Home = () => {
  const news = useLoaderData();
  return (
    <>
      <Header></Header>
      <BrackNews></BrackNews>
      <NavBar></NavBar>
      
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
        <div className='col-span-1'>
          <LeftSideNav></LeftSideNav>
        </div>

        <div className='col-span-1 md:col-span-2'>
          {
            news.map(aNews => <NewsCard key={aNews._id} aNews={aNews}></NewsCard>)
          }
        </div>

        <div className='col-span-1'>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </>
  )
}

export default Home;