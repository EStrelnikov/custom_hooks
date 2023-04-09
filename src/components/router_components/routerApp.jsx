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
import { DataProvider } from './context/dataContex';
import AuthProvider from './context/authProvider';
import { Login } from './pages/login';
import Category from './pages/category';
import { PriveteRoute } from './priveteRoute';



const RouterApp = () => {
    
    return (
          <AuthProvider>
            <DataProvider>
              <Routes>
                <Route element={<Navigation />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/categories' element={<PriveteRoute><Category /></PriveteRoute>}>
                      <Route path='/categories/heroes' >
                          <Route index element={<Heroes />} />
                          <Route path=':id' element={<Hero />} />
                      </Route>
                      <Route path='/categories/locations' >
                          <Route index element={<Locations />} />
                          <Route path=':id' element={<Location />} />
                      </Route>
                      <Route path='/categories/episodes'>
                          <Route index element={<Episodes />} />
                          <Route path=':id' element={<Episode />} />
                      </Route>
                    </Route>  
                    <Route path='*' element={<NotFound />} />
                    <Route path='/login' element={<Login />} />
                </Route>
              </Routes>
            </DataProvider>
          </AuthProvider> 
    )
} 

export default RouterApp