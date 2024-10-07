import { useEffect, useState } from 'react'
import './Friends.css'
import SingleFrind from './SingleFrind'

function Friends() {
    const [friend, setFriend] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])
    return (
        <div className='box'>
            <h3>Friends : {friend.length}</h3>
            {
                friend.map(fir => <SingleFrind friends={fir}></SingleFrind>)
            }
        </div>
    )
}

export default Friends