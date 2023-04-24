import React, { useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useGetData } from '../../../custom_hooks/useGetData';
import { HEROES_URL } from './../../../data/data.url';
import Loading from './loading';
import { updateData } from '../../../data/data';

const Heroes = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const { loading, error, data, hasMore } = useGetData(HEROES_URL, pageNumber);
    if (data) updateData('characters', data);
    const observer = useRef();
    const lastNodeRef = useCallback((node) => {
        if (loading) return;
        if (observer.current) {
            observer.current.disconnect();
        }

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prevState => prevState + 1);
            }
        })
        if (node) {
            observer.current.observe(node);
        }
    }, [loading, hasMore]);

    return (
        <div className='container mt-3'>
            <ul>
                { 
                    data.map( (el, index) => {
                        if (data.length === index + 1) {
                            return (
                                <li 
                                    ref={lastNodeRef} 
                                    style={{'listStyleType': 'none'}} 
                                    className='p-3' 
                                    key={el.id}
                                >
                                    <img 
                                        src={ el.image } 
                                        alt={el.name} 
                                        height='100px' 
                                        className='me-3'
                                    />
                                    <Link to={`/categories/heroes/${ el.id }`} state={el}>
                                        {el.name}
                                    </Link>
                                </li>
                            )
                        }  else {
                            return (
                                <li 
                                    style={{'listStyleType': 'none'}} 
                                    className='p-3' 
                                    key={el.id}
                                >
                                    <img 
                                        src={ el.image } 
                                        alt={el.name} 
                                        height='100px' 
                                        className='me-3'
                                    />
                                    <Link to={`/categories/heroes/${ el.id }`} state={el}>
                                        {el.name}
                                    </Link>
                                </li>
                            )
                        }
                        
                    })
                }
                { loading && <Loading />}
                { error && <div>Error</div> }
            </ul>
        </div>
    )
} 

export default Heroes