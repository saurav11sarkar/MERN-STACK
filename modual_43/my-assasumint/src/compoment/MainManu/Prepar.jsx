import PropTypes from 'prop-types';


const Prepar = ({ preps,count,totalSum }) => {
    const { recipe_name, preparing_time, calories } = preps;
    


    return (
        <>
            <tr className='border-b border-gray-200'>
                <td>{count}</td>
                <td>{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
                <td><button onClick={() => totalSum(preps)} className='bg-green-600 px-2 py-1 rounded-lg text-white'>pursece</button></td>
            </tr>


        </>

    );
};

Prepar.propTypes = {
    preps: PropTypes.object,
    count: PropTypes.number,
    totalSum: PropTypes.func,
};

export default Prepar;