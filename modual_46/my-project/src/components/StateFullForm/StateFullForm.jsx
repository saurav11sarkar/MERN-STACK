import { useState } from "react";

const StateFullForm = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const[error, setError] = useState('');


    const heandleSubmit = (even) => {
        even.preventDefault();
        if(password.length < 4){
            setError('Password must be 6 characters or longer');
        }else{
            setError('');
            console.log(email);
            console.log(password);
        }
        
        
    }

    const heandleEmail = (even) => {
        even.preventDefault();
        setEmail(even.target.value);
       
    }

    const heandlePassword = (even) => {
        even.preventDefault();
        setPassword(even.target.value);
       
    }

    return (
        <div>
            <h2>State Full Froms</h2>
            <form onSubmit={heandleSubmit}>

                <input name="email"
                    onChange={heandleEmail}
                    type="email"
                    placeholder="email hare"
                    className="input input-bordered input-warning w-full max-w-xs" required/>
                <br />
                <br />
                <input name="password"
                    onChange={heandlePassword}
                    type="password"
                    placeholder="password"
                    className="input input-bordered input-warning w-full max-w-xs" required/>

                <br />
                <br />
                <button type="submit" className="btn btn-outline btn-warning">Submit</button>

                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFullForm;