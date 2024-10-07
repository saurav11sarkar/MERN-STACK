import PropTypes from 'prop-types'
import { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider';
import {Navigate} from 'react-router-dom';

const PrivateRouts = ({ children }) => {
    const {user, loading } = useContext(AuthContext);
    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }
    if(user){
        return children
    }
    return (
        <Navigate to={'/login'}></Navigate>
    )
}

PrivateRouts.propTypes = {
    children: PropTypes.node,
}

export default PrivateRouts