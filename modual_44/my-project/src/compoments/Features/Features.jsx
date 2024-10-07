import React from 'react';
import PropTypes from 'prop-types';
import { FaRegCheckCircle } from "react-icons/fa";

const Features = ({feature}) => {
    return (
        <div>
            <p className='flex gap-3 items-center text-justify'><FaRegCheckCircle className='text-green-500' />{feature}</p>
        </div>
    );
};

Features.propTypes = {
    PropTypes:PropTypes.string,
};

export default Features;