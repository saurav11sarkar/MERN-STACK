import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetile = () => {
    const user = useLoaderData();
    const { name, website } = user;
    return (
        <div>
            <h2>User Detiles: {name}</h2>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetile;