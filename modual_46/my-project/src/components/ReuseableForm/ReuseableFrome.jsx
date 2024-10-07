import PropTyple from "prop-types"

const ReuseableFrome = ({ formTitle, hendleSubmit, submitBtnText = 'Submit', children }) => {
    const hendleLocalSubmit = (even) =>{
        even.preventDefault(); 
        const data = {
            name: even.target.name.value,
            email: even.target.email.value,
        }
        hendleSubmit(data);
    }
   
    return (
        <div>
            <h2>Reuseable {formTitle} </h2>
            {children}

            <form onSubmit={hendleLocalSubmit}>
                <input name="name"
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-warning w-full max-w-xs" />
                <br />
                <br />
                <input name="email"
                    type="email"
                    placeholder="email hare"
                    className="input input-bordered input-warning w-full max-w-xs" />
                <br />
                <br />
                <button type="submit" className="btn btn-outline btn-warning">{submitBtnText}</button>
            </form>
        </div>
    );
};

ReuseableFrome.propTyple = {
    formTitle: PropTyple.object,
    submitBtnText: PropTyple.string,
    hendleSubmit: PropTyple.func,
}

export default ReuseableFrome;