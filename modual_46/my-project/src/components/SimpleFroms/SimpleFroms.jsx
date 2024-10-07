const SimpleFroms = () => {

    const hendleSubmit = (even) => {
        even.preventDefault();

        let textValue = even.target.name.value;
        console.log('from submites',textValue);
        
        let emailValue = even.target.email.value;
        console.log('from submites',emailValue);


        even.target.name.value = '';
        even.target.email.value = '';
    }

    return (
        <div>
            <h2>Simple Froms</h2>
            <form onSubmit={hendleSubmit}>
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
                <button type="submit" className="btn btn-outline btn-warning">Submit</button>
            </form>
        </div>
    );
};

export default SimpleFroms;