import { Link } from "react-router-dom";

const Bannder = () => {
    return (
        <div className="card card-side bg-gray-700 shadow-xl">
            
            <div className="card-body text-center m-auto">
                <h2 className="card-title  text-4xl font-bold mb-4">Books to freshen up your bookshelf</h2>
                
                <div className="flex justify-center">
                    <Link to={'/list'}><button className="btn btn-success">View This List</button></Link>
                    
                </div>
            </div>
            <figure>
                <div className="w-80 md:pr-8 m-auto">
                <img className="w-full mx-auto"
                    src="https://i.postimg.cc/zfKRsMRg/banner.png"
                    alt="Album" />
                </div>
            </figure>
        </div>
    );
};

export default Bannder;