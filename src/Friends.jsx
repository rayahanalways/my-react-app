import Friend from './Friend';
import './Friend.css';
import { useEffect, useState } from "react"

export default function Friends() {
    const [friend, setFriend] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriend(data));
    }, [])
    return (
        <div className="friend">
            <h3>Friends: {friend.length} </h3>
            {
                friend.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}