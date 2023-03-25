import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Countries from '../pages/Countries';
import TripMyDream from '../pages/TripMyDream';
import GridTemplate from './Templates/GridTemplate';

export default function CountryRoutes() {
  return (
    <GridTemplate>
      <Routes>
        <Route index element={<TripMyDream />} path='/' />
        <Route path='/edit' element={<>EDIT</>} />
        <Route path='/:name' element={<Countries />} />
      </Routes>
    </GridTemplate>
  );
}
