// API 

const phoneLoad = (searchText='13' ,isShowAll) =>{
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    .then((res) => res.json())
    .then((json) => displayPhone(json.data,isShowAll))
}

// display API
const displayPhone = (phone,isShowAll) =>{
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';

    // show All hidden or add
    const showAllContainer = document.getElementById('show-all-container')
    if(phone.length > 12 && !isShowAll ){
        showAllContainer.classList.remove('hidden');
    }else{
        showAllContainer.classList.add('hidden'); 
    }

    if(!isShowAll){
        phone = phone.slice(0,12);
    }
    
    
    phone.forEach(element => {
        const phoneCard = document.createElement('div');
        phoneCard.classList = 'card  shadow-xl p-4 bg-gray-200';

        phoneCard.innerHTML = `
        <figure><img src="${element.image}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">${element.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-center">
                <button onclick="handleShowDetail('${element.slug}')" class="btn text-white btn-primary">Show Detail</button>
            </div>
        </div>
        `;

        phoneContainer.appendChild(phoneCard);
    });
    // hide loading spinner
    toggLoadingSpinner(false);
}

// heandele Sow Detail
const handleShowDetail = (id) =>{
    // console.log(id);
    fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    .then((res) => res.json())
    .then((data) => showPhoneDetails(data.data))
}


// detail
const showPhoneDetails = (phone) =>{
    // show the modal
    // console.log(phone);
    const phoneName = document.getElementById('phone-name');
    phoneName.innerText = phone.name;

    const showDetailContainer = document.getElementById('show-detail-container');

    showDetailContainer.innerHTML = `
        <img src="${phone.image}" alt="" />
        <p><span>Storage: </span>${phone?.mainFeatures?.storage} </p>
        <p><span>GPS: </span>${phone?.others?.GPS} </p>
    `
    my_modal_3.showModal();
}

// some show 
phoneLoad();


const handleSearch2=(isShowAll)=>{
    // add loading sprinner
    toggLoadingSpinner(true);

    const searchFiled = document.getElementById('search-filed2');
    const searchText = searchFiled.value;
    phoneLoad(searchText,isShowAll)
}

// loading-spring

const toggLoadingSpinner = (isLoading) =>{
    const loadingSpriner = document.getElementById('loading-spring');
    if(isLoading){
        loadingSpriner.classList.remove('hidden')
    }else{
        loadingSpriner.classList.add('hidden');
    }
    
}


// hendle show all
const handleShowAll = () =>{
    handleSearch2(true);
}