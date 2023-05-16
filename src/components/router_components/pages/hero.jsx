import React from 'react';
import { Navigate } from 'react-router';
import {useLocation} from 'react-router-dom'

const Hero = () => {
    const location = useLocation();
    const item = location.state;
    // const  { id }  = useParams();
    return (
        item 
            ? 
                <div className="card container p-3 mt-5">
                    <div className="card-body m-auto">
                        <div className="card-text">
                            <img src={item.image} height='250px' alt='img'/>
                        </div>
                        <div className="card-text">
                            <span className='me-1 fst-italic'>Имя:</span><span className='fw-weight-normal'>{item.name}</span>
                        </div>
                        <div className="card-text">
                            <span className='me-1 fst-italic'>Вид:</span><span className='fw-weight-normal'>{item.species}</span>
                        </div>
                        <div className="card-text">
                            <span className='me-1 fst-italic'>Пол:</span><span className='fw-weight-normal'>{item.gender}</span>
                        </div>
                        <div className="card-text">
                            <span className='me-1 fst-italic'>Тип:</span><span className='fw-weight-normal'>{item.type || '-'}</span>
                        </div>
                        <div className="card-text">
                            <span className='me-1 fst-italic'>Статус:</span><span className='fw-weight-normal'>{item.status || '-'}</span>
                        </div>
                        <div className="card-text">
                            <span className='me-1 fst-italic'>Создан:</span><span className='fw-weight-normal'>{new Date(item.created).toLocaleDateString()}</span>
                        </div>
                    </div>
                </div>
            : <Navigate to='/heroes' />
    )
} 

export default Hero