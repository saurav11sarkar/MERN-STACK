import { Link, useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error);
    // const errosBack = useNavigate();

    // const handleErroBack = () =>{
    //     errosBack(-1)
    // }
    return (
        <div>
            <h2>Oops!!!</h2>
            <p>{error.statusText || error.massage}</p>
            {
                error.status === 404 && <div>
                    <h3>Page not found</h3>
                    <p>Go back ehare you from</p>

                    <Link to={`/`}>
                    <button className="btn btn-primary">Back</button>
                    </Link>
                </div>
            }
        </div>
    );
};

export default Error;