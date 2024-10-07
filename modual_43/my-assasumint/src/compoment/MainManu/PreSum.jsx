import PropTypes from 'prop-types';
import Sum from './Sum';

const PreSum = ({totalSum}) => {
    
    return (
        <>
            <h2 className='text-center font-bold uppercase'>Currently cooking: {totalSum.length}</h2>
            <div className='overflow-x-auto'>
                    <table className='min-w-full bg-white border border-gray-200'>
                        <thead>
                            <tr className='bg-gray-200 text-gray-600 uppercase text-sm leading-normal'>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className='text-gray-600 text-sm font-light text-center rounded-lg'>

                            {
                                totalSum.map((rep, index) => <Sum totalSum={totalSum} count={index + 1} key={rep.recipe_id} hasSum={rep}></Sum>)
                            }
                        </tbody>
                    </table>
                </div>
        </>
    );
};

PreSum.propTypes = {
    totalSum:PropTypes.array, 
};

export default PreSum;