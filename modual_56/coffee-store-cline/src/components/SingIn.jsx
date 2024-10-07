import { useContext } from "react";
import { AuthContex } from "../provider/AuthProvider";

const SingIn = () => {
  const {createSingIn} = useContext(AuthContex);

  const handleSignIn = (even) => {
    even.preventDefault();
    const form = even.target;
    const email = form.email.value;
    const password = form.password.value;
    createSingIn(email,password)
    .then(result => {
      console.log(result.user);
      const user = {email, lastLoggedAt: result.user?.metadata?.lastSignInTime}

      // update last logged at user
      fetch('http://localhost:5000/user',{
        method: "PATCH",
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify(user)
      })
      .then(res=> res.json())
      .then(data => {
        console.log(data)
        if(data.modifiedCount > 0){
          alert('update successfule')
        }
      })
    })
    .catch(error=>console.log(error))
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Sign In</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSignIn}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SingIn;