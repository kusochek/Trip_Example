import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import CountryRoutes from './components/CountryRoutes';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/tripmydream/*' element={<CountryRoutes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
