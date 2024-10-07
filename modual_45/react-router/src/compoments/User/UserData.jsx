import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserData = ({user}) => {
    const {id, name, email, phone} = user
    return (
        <div className='border-2 border-sky-500 p-5 rounded-lg'>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
            <Link to={`/user/${id}`} className='text-sky-500 underline hover:text-sky-100'>Show Details</Link>
        </div>
    );
};

UserData.propTypes = {
    user: PropTypes.object,
};

export default UserData;