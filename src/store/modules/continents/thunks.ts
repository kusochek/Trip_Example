import { createAsyncThunk } from '@reduxjs/toolkit';
import { continents } from '../../../api';
import { moduleName } from './constant';
import { IContinents } from './reducer';

const fetchContinents = createAsyncThunk(`${moduleName}/fetchContinents`, async () => {
  const { data }: { data: IContinents[] } = await continents.fetch();
  return data;
});

export default {
  fetchContinents,
};
