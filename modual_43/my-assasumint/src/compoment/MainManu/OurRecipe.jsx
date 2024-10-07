import PropTypes from 'prop-types';
import { CiClock2 } from "react-icons/ci";
import { MdOutlineLocalFireDepartment } from "react-icons/md";

const OurRecipe = ({reipe,heandlePreparing}) => {
    const {recipe_image,recipe_name,short_description,ingredients,preparing_time,calories} = reipe;
    return (
        <div>
            <div className='border-2 rounded-lg shadow-lg p-3'>
                <div className='mb-2'>
                    <img className='w-full rounded-lg' src={recipe_image} alt="" />
                </div>
                <div className=''>
                    <h3 className='text-2xl font-semibold'>{recipe_name}</h3>
                    <small className='text-justify text-gray-500'>{short_description}</small>
                    <div className='border-b-2 my-3'></div>
                </div>
                <div>
                    <h3 className='font-semibold'>Ingredients: {ingredients.length}</h3>
                    <div className='mx-3 my-3'>
                        {
                            ingredients.map((intere,idx) => <li className='ml-6 text-gray-500' key={idx}>{intere}</li>)
                        }
                    
                    </div>
                </div>

                <div className='text-gray-500 flex justify-between items-center mb-4'>
                    <div className='flex gap-2 justify-center items-center'>
                        <span><CiClock2 /></span>
                        <p>{preparing_time}</p>
                    </div>
                    <div className='flex gap-2 justify-center items-center'>
                        <span><MdOutlineLocalFireDepartment /></span>
                        <p>{calories}</p>
                    </div>
                </div>

                <div>
                    <button onClick={() => heandlePreparing(reipe)} className='bg-green-600 px-3 py-2 rounded-full text-white hover:bg-green-800'>Want to Cook</button>
                </div>
            </div>
        </div>
    );
};

OurRecipe.propTypes = {
    reipe: PropTypes.object,
    heandlePreparing: PropTypes.func,
};

export default OurRecipe;