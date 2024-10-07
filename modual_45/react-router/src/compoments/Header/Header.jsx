import { Link, NavLink } from "react-router-dom";


const Header = () => {

    const navStyle = ({ isActive }) => (isActive ? `text-blue-500` : '');
    
    return (
        <div>
            <nav className="flex gap-6 justify-around items-center">
                <Link to="/">Home</Link>

                <NavLink className={navStyle} to="/user">Users</NavLink>

                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/App">App</Link>
                
                <NavLink className={navStyle} to={`/posts`}>Posts</NavLink>
            </nav>
        </div>
    );
};

export default Header;