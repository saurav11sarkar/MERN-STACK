import PropTypes  from "prop-types";
import Features from "../Features/Features";
const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className="bg-blue-500 rounded-lg p-4 text-white flex flex-col justify-center items-center">
            <h2>
                <span className="text-5xl">${price}</span>
                <span className="text-2xl">/mon</span>
                {/* <span className="text-7xl">{name}</span> */}
            </h2>

            <h4 className="text-3xl my-4">{name}</h4>
           <div className="flex-grow">
           {
                features.map((feature) => <Features key={feature} feature={feature}></Features>)
            }
           </div>
            <div className="py-3">
            <button className="btn btn-accent ">Buy Now</button>
            </div>
            
        </div>
    );
};

PriceOption.propTypes = {
    option:PropTypes.object,
}

export default PriceOption;