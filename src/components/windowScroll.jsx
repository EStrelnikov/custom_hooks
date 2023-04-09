import React from 'react';
import { useWindowScroll } from '../custom_hooks/useWindowScroll';

export const WindowScroll = () => {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <div className>
      <div className='content'></div>
      <p className='info'>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </p>
      <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
    </div>
  );
};