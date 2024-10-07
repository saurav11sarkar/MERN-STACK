import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex gap-7 justify-center items-center h-72">
            <Link className="border-2 border-sky-700 rounded-xl p-3" to={'/'}>Home</Link>
            <Link className="border-2 border-sky-700 rounded-xl p-3" to={'/login'}>Login</Link>
        </div>
    );
};

export default Header;