import React from 'react';
import { Navigate } from 'react-router';
import {useLocation} from 'react-router-dom'

const Episode = () => {
    const location = useLocation();
    const item = location.state;
    // const  { id }  = useParams();
    return (
        item 
            ? 
                <div className="card container p-3 mt-5">
                    <div className="card-body">
                        <div className="card-text">
                            <span className='me-1 fst-italic'>Название:</span><span className='fw-weight-normal'>{item.name}</span>
                        </div>
                        <div className="card-text">
                            <span className='me-1 fst-italic'>-</span><span className='fw-weight-normal'>{new Date(item.air_date).toLocaleDateString()}</span>
                        </div>
                        <div className="card-text">
                            <span className='me-1 fst-italic'>Эпизод:</span><span className='fw-weight-normal'>{item.episode}</span>
                        </div>
                        <div className="card-text">
                            <span className='me-1 fst-italic'>Создан:</span><span className='fw-weight-normal'>{new Date(item.created).toLocaleDateString()}</span>
                        </div>
                    </div>
                </div>
            : <Navigate to='/episodes' />
    )
} 

export default Episode