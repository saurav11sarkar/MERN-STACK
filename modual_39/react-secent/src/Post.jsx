import { useEffect, useState } from "react"

export default function Post() {
    const [post, setPost] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data.slice(0, 50)))
    }, [])
    return (
        <div>
            <h3 className="text-4xl">Post : {post.length}</h3>
            {
                post.map(pos => <ShowPost post={pos}></ShowPost>)
            }
        </div>
    )
}

function ShowPost({ post }) {
    return (
        <div className="border-2 rounded m-3 p-2">
            <h5>Tital : {post.title}</h5>
            <p><small>Post-Id : {post["id"]}</small></p>
            <p><small>Body : {post.body}</small></p>
        </div>
    )
}