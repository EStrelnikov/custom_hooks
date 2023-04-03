import React  from 'react';
import { Link } from 'react-router-dom';
import { useDataContext } from './../hooks/useData';

const Episodes = () => {
    const {episodes} = useDataContext();
    return (
        <ul>
            { 
                episodes.map( el => (
                    <li key={el.id}>
                        <Link to={`/episodes/${ el.id }`} state={{name: 'asdf'}}>{el.name}</Link>
                    </li>
                ))
            }
        </ul>
       
    )
} 

export default Episodes