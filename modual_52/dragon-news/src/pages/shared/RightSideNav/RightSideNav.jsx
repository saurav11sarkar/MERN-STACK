import { FaGoogle, FaGithub, FaFacebook, FaTwitterSquare, FaInstagramSquare    } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightSideNav = () => {
    return (
        <>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-2xl font-semibold">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle />
                    Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub />
                    Github
                </button>
            </div>

            <div className="p-4  mb-6">
                <h2 className="text-2xl font-semibold mb-4">Find Us On</h2>
                <a className="p-3 font-semibold text-lg flex gap-3 items-center border rounded-t-lg" href="">
                <FaFacebook/> Facebook
                </a> 
                <a className="p-3 font-semibold text-lg flex gap-3 items-center border-x " href="">
                <FaTwitterSquare /> Twitter
                </a> 
                <a className="p-3 font-semibold text-lg flex gap-3 items-center border rounded-b-lg" href="">
                <FaInstagramSquare /> Instagram
                </a> 
            </div>

            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-2xl font-semibold">Q zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </>
    );
};

export default RightSideNav;