import React  from 'react';
import { Link } from 'react-router-dom';
import { useDataContext } from './../context/dataContex';

const Episodes = () => {
    const {episodes} = useDataContext();
    return (
        <div className='container mt-3'>
            <ul>
                { 
                    episodes.map( el => (
                        <li key={el.id}>
                            <Link to={`/categories/episodes/${ el.id }`}>{el.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
} 

export default Episodes