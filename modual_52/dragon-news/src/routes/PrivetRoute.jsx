import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { PropTypes } from "prop-types"
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    if (loading) {
        return <span className="loading loading-infinity loading-lg"></span>
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>;
};

PrivetRoute.propTypes = {
    children: PropTypes.node,
}

export default PrivetRoute;