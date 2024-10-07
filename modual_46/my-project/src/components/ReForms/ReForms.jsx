import { useEffect, useRef } from "react";

const ReForms = () => {

    const namRef = useRef(null);
    const emailref = useRef(null);

    useEffect(()=>{
        namRef.current.focus();
    },[])

    const heandleSubmit = (even) =>{
        even.preventDefault();
        console.log(namRef.current.value);
        console.log(emailref.current.value);
    }
    return (
        <div>
            <h2>Re Froms</h2>

            <form onSubmit={heandleSubmit}>
                <input ref={namRef} defaultValue={'saurav'} name="name"
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-warning w-full max-w-xs" />
                <br />
                <br />
                <input ref={emailref} name="email"
                    type="email"
                    placeholder="email hare"
                    className="input input-bordered input-warning w-full max-w-xs" />
                <br />
                <br />
                <button type="submit" className="btn btn-outline btn-warning">Submit</button>
            </form>
        </div>
    );
};

export default ReForms;