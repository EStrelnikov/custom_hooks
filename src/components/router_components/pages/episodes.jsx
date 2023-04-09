import React  from 'react';
import { Link } from 'react-router-dom';
import { useDataContext } from './../hooks/useData';

const Episodes = () => {
    const {episodes} = useDataContext();
    return (
        <div className='container mt-3'>
            <ul>
                { 
                    episodes.map( el => (
                        <li key={el.id}>
                            <Link to={`/episodes/${ el.id }`}>{el.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
} 

export default Episodes