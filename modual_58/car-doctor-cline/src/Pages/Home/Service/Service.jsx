import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="mt-4">
            <div className="text-center space-y-4">
                <h3 className="text-2xl font-semibold text-sky-400">Services</h3>
                <h2 className="text-5xl">Our Service Area</h2>
                <p className="w-5/6 lg:w-1/2 m-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

                {
                    services.map(service => <div key={service._id} className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src={service.img}
                                alt="Shoes"
                                className="rounded-xl w-full" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{service.title}</h2>
                            <p className="text-sky-400 font-semibold">Price: ${service.price}</p>
                            <div className="card-actions">
                                <Link to={`/chackout/${service._id}`} className="btn btn-primary">Buy Now</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Service;