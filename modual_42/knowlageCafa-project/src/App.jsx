import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import BookMarkes from './components/bookmarkes/BookMarkes'
import Heder from './components/heder/Hedar'

function App() {
  const [bookmarkes, setBookmarkes] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarkes,blog];
    setBookmarkes(newBookmarks);
  }

  const handleMarkeAsRead = (id,time) =>{
    setReadingTime(readingTime + time);
    // remove the book marked
    // console.log('remove book')
    const remainingBookmarkes = bookmarkes.filter(bookmark => bookmark.id !== id);
    setBookmarkes(remainingBookmarkes);
  }
  return (
    <>
      <Heder></Heder>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkeAsRead={handleMarkeAsRead}></Blogs>
        <BookMarkes bookmarkes={bookmarkes} readingTime={readingTime}></BookMarkes>
      </div>
    </>
  )
}

export default App
