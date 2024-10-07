import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
const NavBar = () => {
    return (
        <div>
            <div className="grid grid-cols-3 justify-between items-center">
                <div className="col-span-1">
                    <h1 className="text-2xl font-bold">Recipe Calories</h1>
                </div>
                <div className="col-span-1">
                    <div className="hidden sm:flex sm:gap-6 items-center font-bold">
                        <a href="">Home</a>
                        <a href="">Recipes</a>
                        <a href="">About</a>
                        <a href="">Search</a>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="flex gap-4 justify-end items-center">
                        <div className="flex items-center bg-slate-200 rounded-full px-4 py-2">
                            <IoIosSearch className="text-gray-500 mr-2" />
                            <input
                                className="border-none bg-slate-200 outline-none flex-1"
                                type="text"
                                placeholder="Search"
                            />
                        </div>
                        <button className="bg-green-600 p-2 rounded-full text-white"><FaRegCircleUser /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;