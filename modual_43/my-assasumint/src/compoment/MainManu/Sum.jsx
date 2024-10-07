import PropTypes from 'prop-types';

const Sum = ({count,hasSum}) => {
    const { recipe_name, preparing_time, calories } = hasSum;
    return (
        <>
            <tr className='border-b border-gray-200'>
                <td>{count}</td>
                <td>{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
            </tr>


        </>
    );
};

Sum.propTypes = {
    hasSum:PropTypes.object,
    count:PropTypes.number
};

export default Sum;