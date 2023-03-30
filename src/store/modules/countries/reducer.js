import { createSlice } from '@reduxjs/toolkit';
import actions from './actions';
import { moduleName } from './constant';
import thunks from './thunks';

const initialState = {
  countries: [],
  filterCountries: [],
};

/* eslint-disable no-param-reassign */
export const countrySlice = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actions.filterCountries, (state, { payload }) => {
      if (payload.search === '') {
        state.filterCountries = state.countries;
      } else {
        state.filterCountries = state.countries.filter((country) => country.country.toLowerCase().indexOf(payload.search.toLowerCase()) >= 0);
      }
    });
    builder.addCase(thunks.fetchCountry.fulfilled, (state, { payload }) => {
      state.countries = payload;
    });
  },
});

export default countrySlice.reducer;
