import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constant';
import thunks from './thunks';

export interface IContinents {
  continentName: string,
  image: string,
  description: string,
  countries: string[],
  id: number,
  path: string,
}

type InitialState = {
  continents: IContinents[],
}

const initialState = {
  continents: [
    {
      continentName: '',
      image: '',
      description: '',
      countries: [''],
      id: 0,
      path: '',
    }
  ],
};

/* eslint-disable no-param-reassign */
export const continentsSlice = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<InitialState>) => {
    builder.addCase(thunks.fetchContinents.fulfilled, (state, { payload }: { payload: IContinents[] }) => {
      state.continents = payload;
    });
  },
});

export default continentsSlice.reducer;
