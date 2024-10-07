import useInputState from "../../hooks/useInputState";


const HookForm = () => {
    // const [name, hendleNameChange] = useInputState('')

    const emailState = useInputState('');
    const hendleSubmit = (even) =>{
       even.preventDefault();
       console.log(emailState.value) 
    }
    return (
        <div>
            <h2>Hook Froms</h2>
            <form onSubmit={hendleSubmit}>
                {/* <input value={name} onChange={hendleNameChange} name="name"
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-warning w-full max-w-xs" /> */}
                <br />
                <br />
                <input {...emailState} name="email"
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

export default HookForm;