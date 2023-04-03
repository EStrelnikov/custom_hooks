import React from 'react';
import { Navigate, useParams } from 'react-router';
import { useDataContext } from './../hooks/useData';

const Episode = () => {
    const {episodes} = useDataContext();
    const  { id }  = useParams();
    const [item] = episodes.filter(el => el.id === Number(id));
    debugger
    return (
        item 
            ? 
                <div className="card" style={{width: '18rem'}}>
                    <div className="card-body">
                        <div className="card-text">
                            <span>{item.name}</span>
                        </div>
                    </div>
                </div>
            : <Navigate to='/episodes' />
    )
} 

export default Episode