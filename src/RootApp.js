import React, {Suspense, lazy} from "react";
import "./App.css";
import Loading from "./components/router_components/pages/loading";
import {BrowserRouter} from 'react-router-dom';
import {Route, Routes} from 'react-router';
import WeatherApp from './apps/WeatherApp';
import NoticesApp from './apps/NoticesApp';
import HomeApp from './apps/HomeApp';


const RickAndMortyApp = lazy(() =>
  import('./apps/RickAndMortyApp')
);

const HooksApp = lazy(() =>
  import('./apps/HooksApp')
);

export function RootApp() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<HomeApp />} />
          <Route path='/Weather' element={<WeatherApp />} />
          <Route path='/NoticesApp' element={<NoticesApp />} />
          <Route path='/hooks' element={<HooksApp />} />
          <Route path='/RickAndMortyApp' element={<RickAndMortyApp />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
