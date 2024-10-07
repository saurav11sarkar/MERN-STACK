import './App.css'

function App() {

  const handleAddUser = even => {
    even.preventDefault();
    const name = even.target.name.value;
    const email = even.target.email.value;
    const user = {name, email};
    console.log(user);

    fetch('http://localhost:5000/users',{
      method:'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.insertedId){
        alert('User added successfully');
        even.target.reset();
      }
    })
  }

  return (
    <>
      <h1 className='text-4xl font-bold'>Simple CRUD</h1>

      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

              <form className="card-body" onSubmit={handleAddUser}>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" name='name' placeholder="Name" className="input input-bordered"  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" name='email' placeholder="email" className="input input-bordered"  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Add User</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
