import { useState } from "react";
import Link from "./Link/Link";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Profile", path: "/profile" }

    ];
    return (
        <nav>
            <div onClick={() => setOpen(!open)} className="md:hidden">
                {open ? <IoClose className="text-xl" /> : <IoMenu className="text-xl" />}
            </div>
            <ul className={`md:flex md:static duration-1000 absolute px-4 ${open ? 'top-16' : '-top-60'}`}>
                {
                    routes.map(route => (<Link key={route.id} route={route}></Link>))
                }
            </ul>
        </nav>
    );
};

export default NavBar;
