function api(id) {
    fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    .then(res => res.json())
    .then(data => all(data.data))
}

// // Call the API function to fetch data
// api();

function all(data) {
    console.log(data);
    const allCatagory = document.getElementById('allCato');
    allCatagory.innerHTML = '';
    const empty = document.getElementById('empty');
    empty.innerHTML = '';

    if(data.length > 0){
        data.forEach(element => {
            const newDiv = document.createElement('div');
            newDiv.innerHTML = `
            <div class="card bg-base-100 w-56 shadow-xl">
                <figure>
                  <img
                    src="${element.thumbnail}"
                    alt="Shoes" />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">
                    ${element.name}
                    <div class="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions justify-end">
                    <div class="badge badge-outline">Fashion</div>
                    <div class="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
            `;
    
            allCatagory.appendChild(newDiv);
        });
    }else{
        const newDiv = document.createElement('div');
        newDiv.classList = 'flex flex-col justify-center items-center h-screen text-2xl font-bold';
        newDiv.innerHTML = `
        <img src="86-PHero-tube/Icon.png" alt="">
        <h1 class="mt-9">Oops!! Sorry, There is no</h1>
        <h1>content here</h1>
        `
        empty.appendChild(newDiv);
    }

}

fetch(`https://openapi.programming-hero.com/api/videos/categories`)
.then(res => res.json())
.then(data => console.log(data.data))