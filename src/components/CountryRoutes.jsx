import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Countries from '../pages/Countries';
import NotFound from '../pages/NotFound';
import TripMyDream from '../pages/TripMyDream';
import GridTemplate from './Templates/GridTemplate';
import CreateTrip from '../pages/CreateTrip';

export default function CountryRoutes() {
  const user = {
    displayName: 'Johnny Depp',
    id: 1,
    roles: ['user', 'admin'],
  };

  return (
    <GridTemplate user={user}>
      <Routes>
        <Route path='/*' element={<NotFound />} />
        <Route element={<TripMyDream />} path='/' />
        <Route path='/create' element={<CreateTrip />} />
        <Route path='/:name' element={<Countries />} />
      </Routes>
    </GridTemplate>
  );
}
