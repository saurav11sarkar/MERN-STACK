const post = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => postMen(data))
}

const postMen = (data) =>{
    const postContainer = document.getElementById('post-container');
    for(let post of data){
        const div = document.createElement('div');
        div.classList.add('post');
        div.classList.add('post-cont');
        div.innerHTML = `
        <h4>User- ${post.userId}</h4>
        <h5>Title: ${post.title} </h5>
        <p>Description: ${post.body}</p>
        `;
        postContainer.appendChild(div);
        console.log(post)
    }
}

post();