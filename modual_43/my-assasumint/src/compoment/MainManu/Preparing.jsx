import PropTypes from 'prop-types';
import Prepar from './Prepar';
import { useState } from 'react';
import PreSum from './PreSum';

const Preparing = ({ preparing }) => {
    const [sum, setSum] = useState([]);

    const totalSum = (sums) => {
        const newSum = [...sum,sums]
        setSum(newSum)
    }

    return (
        <div>
            <div className='bg-gray-100 p-6 rounded-lg'>
                <h2 className='text-center font-bold uppercase'>Want to cook: {preparing.length}</h2>
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
                                preparing.map((rep, index) => <Prepar totalSum={totalSum} count={index + 1} key={rep.recipe_id} preps={rep}></Prepar>)
                            }
                        </tbody>
                    </table>
                </div>
                <PreSum totalSum={sum}></PreSum>
            </div>

        </div>
    );
};

Preparing.propTypes = {
    preparing: PropTypes.array,
};

export default Preparing;