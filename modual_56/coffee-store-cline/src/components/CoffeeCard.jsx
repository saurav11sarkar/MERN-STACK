import { GrView } from "react-icons/gr";
import { TbUserEdit } from "react-icons/tb";
import { RiDeleteBin5Fill } from "react-icons/ri";
// import PropTypes from 'prop-types';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, users, setUsers }) => {
    const { _id, name, quentity, supplier, teste, category, details, photo } = coffee;

    const handleDleate = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });

                            const remaining = users.filter(user => user._id !== _id);
                            setUsers(remaining);
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={photo}
                        alt="Movie" />
                </figure>
                <div className="card-body ">
                    <div className='flex justify-between items-center'>
                        <div className='space-y-2'>
                            <h2 className="card-title">{name}</h2>
                            <p>{quentity}</p>
                            <p>{supplier}</p>
                            <p>{teste}</p>
                        </div>
                        <div className="card-actions justify-end">
                            <div className="join join-vertical space-y-3">
                                <button className="btn btn-sm join-item"><GrView className="text-blue-600" /></button>
                                <Link to={`updateCoffee/${_id}`}><button className="btn btn-sm join-item"><TbUserEdit className="text-green-600" /></button></Link>
                                <button onClick={() => handleDleate(_id)} className="btn btn-sm join-item"><RiDeleteBin5Fill className="text-red-600" /></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

// CoffeeCard.propTypes = {
//     coffee: PropTypes.object,
//     users: PropTypes.array,
//     setUsers: PropTypes.func,
// };

export default CoffeeCard;