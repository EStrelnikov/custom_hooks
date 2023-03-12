import React from 'react'
import { useHover } from '../custom_hooks/useHover';

export const Hover = () => {
    const { hovered, ref } = useHover();

    return (
        <>
            <h1>task 3</h1>
            <div ref={ref}>
                {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
            </div>
        </>
    );
}