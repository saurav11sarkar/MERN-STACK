function AllDoc(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => commentData(data.slice(0, 10)))
}

function commentData(data){
    // console.log(data);
    const comm = document.getElementById('comment-container') ;
    comm.classList.toggle('hidden');
    for(let com of data){
        // console.log(com);
        const div = document.createElement('div');
        div.classList.add('div-style');
        div.innerHTML = `
            <h3><strong>Name : </strong>${com.name}</h3>
            <h4><strong>Email : </strong>${com.email}</h4>
            <p><strong>Description : </strong>${com.body}</p>
        `
        comm.appendChild(div);
        
    }
    
}

