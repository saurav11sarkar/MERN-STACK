import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"

const Root = () => {
    return (
        <div>
            <div>
                <NavBar></NavBar>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Root