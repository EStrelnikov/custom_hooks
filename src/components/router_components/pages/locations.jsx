import React from 'react';
import { Link } from 'react-router-dom';
import { useDataContext } from './../context/dataContex';

const Locations = () => {
    const {location} = useDataContext();
    return (
        <div className='container mt-3'>
            <ul>
                { 
                    location.map( el => (
                        <li key={el.id}>
                            <Link to={`/categories/locations/${ el.id }`}>{el.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
} 

export default Locations