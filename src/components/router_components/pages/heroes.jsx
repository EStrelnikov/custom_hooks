import React from 'react';
import { useDataContext } from './../context/dataContex';
import { Link } from 'react-router-dom';

const Heroes = () => {
    const {characters} = useDataContext();
    return (
        <div className='container mt-3'>
            <ul>
                { 
                    characters.map( el => (
                        <li style={{'listStyleType': 'none'}} className='p-3' key={el.id}>
                            <img src={ el.image } alt={el.name} height='100px' className='me-3'/>
                            <Link to={`/categories/heroes/${ el.id }`}>{el.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
} 

export default Heroes