import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/home';
import Heroes from './pages/heroes';
import Locations from './pages/locations';
import Navigation from './pages/navigation';
import Hero from './pages/hero';
import Location from './pages/location';
import Episode from './pages/episode';
import { NotFound } from './pages/notFound';
import Episodes from './pages/episodes';
import { DataProvider } from './hooks/useData';



const RouterApp = () => {
    
    return (
        <>
          <DataProvider>
            <Routes>
              <Route element={<Navigation />}>
                  <Route path='/' element={<Home />} />
                  <Route path='/heroes' >
                      <Route index element={<Heroes />} />
                      <Route path=':id' element={<Hero />} />
                  </Route>
                  <Route path='/locations' >
                      <Route index element={<Locations />} />
                      <Route path=':id' element={<Location />} />
                  </Route>
                  <Route path='/episodes'>
                      <Route index element={<Episodes />} />
                      <Route path=':id' element={<Episode />} />
                  </Route>
                  <Route path='*' element={<NotFound />} />
              </Route>
            </Routes>
          </DataProvider>
        </>  
    )
} 

export default RouterApp