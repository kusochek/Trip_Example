import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { continentsReducer } from './modules/continents';
import { countryReducer } from './modules/countries';

const rootReducer = combineReducers({
  continentsReducer,
  countryReducer,
});
const store = configureStore({ reducer: rootReducer });

export default store;
