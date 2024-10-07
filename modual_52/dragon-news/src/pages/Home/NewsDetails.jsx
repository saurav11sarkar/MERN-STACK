import Header from "../shared/Header/Header";
import NavBar from "../shared/NavBar/NavBar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";

const NewsDetails = () => {
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="md:col-span-2">
                    <h2 className="text-5xl font-semibold">News Detail</h2>
                    <p></p>
                </div>
                <div className="md:col-span-1">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;