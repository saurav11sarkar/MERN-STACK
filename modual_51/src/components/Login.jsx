import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";

const Login = () => {

  const { singInUser, googleUser } = useContext(AuthContext);
  const navigator = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    singInUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
        navigator('/');
      })
      .catch(error => {
        console.error(error)
      })

    e.target.reset();

  }

  const handleGoogleSingin = () => {
    googleUser()
      .then(result => {
        console.log(result.user)
      })
      .catch(error => console.error(error))
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleLogin}>

            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>

            {/* password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />

              {/* forget password */}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>

            <p className="font-semibold text-sm">New to Auth Moha Milon? please <Link className="text-blue-600 " to={'/register'}>Registation</Link></p>
            <p><button onClick={handleGoogleSingin} className="btn btn-ghost">Google</button></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;
