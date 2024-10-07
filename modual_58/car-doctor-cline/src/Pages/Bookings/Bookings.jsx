import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        if (user?.email) {
            const url = `http://localhost:5000/booking?email=${user.email}`;

            axios.get(url, { withCredentials: true })
                .then(res => {
                    setBookings(res.data);
                })
                .catch(error => {
                    console.error("Error fetching bookings:", error);
                });
        }
    }, [user?.email]);

    const handleDeleteBooking = id => {
        axios.delete(`http://localhost:5000/booking/${id}`, { withCredentials: true })
            .then(() => {
                setBookings(prevBookings => prevBookings.filter(booking => booking._id !== id));
            })
            .catch(error => {
                console.error("Error deleting booking:", error);
            });
    };

    const handleUpdate = id => {
        axios.patch(`http://localhost:5000/booking/${id}`, { status: 'confirm' }, { withCredentials: true })
            .then(() => {
                setBookings(prevBookings =>
                    prevBookings.map(booking =>
                        booking._id === id ? { ...booking, status: 'confirm' } : booking
                    )
                );
            })
            .catch(error => {
                console.error("Error updating booking status:", error);
            });
    };

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name & Email</th>
                            <th>Service</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map(booking => (
                            <BookingRow
                                key={booking._id}
                                booking={booking}
                                onDelete={handleDeleteBooking}
                                handleUpdate={handleUpdate}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;
