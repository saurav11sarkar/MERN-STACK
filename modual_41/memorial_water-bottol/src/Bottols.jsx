import PropTypes from 'prop-types';

const Bottols = ({ bottol, handleAdd }) => {
    // console.log(handleAdd);
    return (
        <div className="border-2 border-purple-600 p-2 rounded-xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg m-auto text-center">

            <small className="block text-lg font-medium">{bottol.name}</small>

            <div className="w-full sm:max-w-xs  md:max-w-md lg:max-w-lg mt-2">
                <img className="rounded-2xl w-full" src={bottol.img} alt={bottol.name} />
            </div>

            <small className={`${bottol.price <= 30 ? 'text-sky-600 font-bold' : 'font-bold'} block mt-2`}>
                {bottol.price <= 30
                    ? `Discounted: $${bottol.price} off 10%`
                    : `Price: $${bottol.price}`}
            </small>
            <div className="my-2">
                <button onClick={()=>handleAdd(bottol)} className="btn btn-primary">Purchase</button>
            </div>
        </div>
    );
};

Bottols.propTypes = {
    bottol: PropTypes.object.isRequired,
    handleAdd: PropTypes.object.isRequired,
}

export default Bottols;