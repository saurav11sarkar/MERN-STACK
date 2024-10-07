import parts from "../../../assets/images/about_us/parts.jpg"
import person from "../../../assets/images/about_us/person.jpg"

const About = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                    <img
                        src={person}
                        className="w-full lg:w-3/4 rounded-lg shadow-2xl mb-4 lg:mb-0"
                    />
                    <img
                        src={parts}
                        className="w-1/2 lg:w-1/2 rounded-lg shadow-2xl border-4 absolute right-5 top-1/2  hidden lg:block" 
                    />
                </div>
                <div className="lg:w-1/2 text-center lg:text-left"> 
                    <p className="text-sky-400 font-semibold">About Us</p>
                    <h2 className="text-3xl lg:text-4xl font-bold">We are qualified & experienced in this field</h2>
                    <p className="py-6 text-justify">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <p className="text-justify pb-4">
                        The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <button className="btn btn-info">Get More Info</button>
                </div>
            </div>
        </div>

    );
};

export default About;