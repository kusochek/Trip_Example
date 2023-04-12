import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import store from './store';
import './App.css';
import CountryRoutes from './components/CountryRoutes';
import NotFound from './pages/NotFound';
import TripMyDream from './pages/TripMyDream';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/*' element={<NotFound />} />
            <Route path='/' element={<TripMyDream />} />
            <Route path='/tripmydream/*' element={<CountryRoutes />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
