import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Countries from '../pages/Countries';
import NotFound from '../pages/NotFound';
import TripMyDream from '../pages/TripMyDream';
import GridTemplate from './Templates/GridTemplate';

export default function CountryRoutes() {
  return (
    <GridTemplate>
      <Routes>
        <Route path='/*' element={<NotFound />} />
        <Route element={<TripMyDream />} path='/' />
        <Route path='/edit' element={<>EDIT</>} />
        <Route path='/:name' element={<Countries />} />
      </Routes>
    </GridTemplate>
  );
}
