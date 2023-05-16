import React, { useCallback, useRef, useState }  from 'react';
import { Link } from 'react-router-dom';
import { EPISODES_URL } from './../../../data/data.url';
import { useGetData } from '../../../custom_hooks/useGetData';
import { updateData } from '../../../data/data';

const Episodes = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const { loading, error, data, hasMore } = useGetData(EPISODES_URL, pageNumber);
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
                                    key={el.id}
                                    ref={lastNodeRef}
                                >
                                    <Link 
                                        to={`/categories/episodes/${ el.id }`} 
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
                                    ref={lastNodeRef}
                                >
                                    <Link 
                                        to={`/categories/episodes/${ el.id }`} 
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

export default Episodes