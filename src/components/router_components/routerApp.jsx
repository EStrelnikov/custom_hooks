import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router';
import { DataProvider } from './context/dataContex';
import AuthProvider from './context/authProvider';
import { PriveteRoute } from './priveteRoute';
import Loading from './pages/loading';


const Login = lazy(() => import('./pages/login').then(module => ({
  default: module.Login
})));
const Navigation = lazy(() => import('./pages/navigation'));
const Home = lazy(() => import('./pages/home'));
const Category = lazy(() => import('./pages/category'));
const Heroes = lazy(() => import('./pages/heroes'));
const Hero = lazy(() => import('./pages/hero'));
const Locations = lazy(() => import('./pages/locations'));
const Location = lazy(() => import('./pages/location'));
const Episodes = lazy(() => import('./pages/episodes'));
const Episode = lazy(() => import('./pages/episode'));
const NotFound = lazy(() => import('./pages/notFound').then(module => ({
  default: module.NotFound
})));




const RouterApp = () => {
    
    return (
          <AuthProvider>
            <DataProvider>
              <Suspense fallback={<Loading />}>
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
              </Suspense>  
            </DataProvider>
          </AuthProvider>  
    )
} 

export default RouterApp