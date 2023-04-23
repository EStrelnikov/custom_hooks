import React, { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { LOCATIONS_URL } from './../../../data/data.url';
import { updateData } from '../../../data/data';
import { useGetData } from '../../../custom_hooks/useGetData';

const Locations = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const { loading, error, data, hasMore } = useGetData(LOCATIONS_URL, pageNumber);
    if (data) updateData('location', data);
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
                                    key={el.id}
                                    ref={lastNodeRef}
                                >
                                    <Link 
                                        to={`/categories/locations/${ el.id }`} 
                                        state={el}
                                    >
                                        {el.name}
                                    </Link>
                                </li>
                            )
                        } else {
                            return (
                                <li 
                                    key={el.id}
                                >
                                    <Link 
                                        to={`/categories/locations/${ el.id }`}
                                        state={el}
                                    >
                                        {el.name}
                                    </Link>
                                </li>
                            )
                        }
                    })
                }
            </ul>
        </div>
    )
} 

export default Locations