import React from 'react'
import { useViewportSize } from '../custom_hooks/useViewportSize';

export const ViewportSize = () => {
    const { height, width } = useViewportSize();

  return (
    <>
      Width: {width}, height: {height}
    </>
  );
}