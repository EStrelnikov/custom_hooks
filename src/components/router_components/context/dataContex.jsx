import React, { useContext } from 'react'
import data from '../../../data/data';



const DataContext = React.createContext();
export const useDataContext = () => {
    return useContext(DataContext);
}

export const DataProvider = ({ children }) => {
  return (
    <DataContext.Provider value={data}>
        {children}
    </DataContext.Provider>
  )
}