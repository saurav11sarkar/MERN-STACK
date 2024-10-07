import Marquee from "react-fast-marquee";
import {Link} from 'react-router-dom'
const BrackNews = () => {
    return (
        <div>
            <div className="flex justify-center items-center border-1 rounded-xl bg-gray-500 text-white my-4">
            <button className="btn btn-secondary text-white">Breaking News</button>
            <Marquee pauseOnHover={true}  speed={100}>
                <Link to={'/'}>I can be a React component, multiple React components, or just some text.</Link> 
            </Marquee>
            </div>
        </div>
    );
};

export default BrackNews;