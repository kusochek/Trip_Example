import { createAsyncThunk } from '@reduxjs/toolkit';
import { continents } from '../../../api';
import { moduleName } from './constant';

const fetchContinents = createAsyncThunk(`${moduleName}/fetchContinents`, async () => {
  const { data } = await continents.fetch();
  return data;
});

export default {
  fetchContinents,
};
