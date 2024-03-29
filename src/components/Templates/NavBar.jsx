import {
  Box, styled, TextField,
} from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { countryActions } from '../../store/modules/countries';

const Wrapp = styled(Box)(() => ({
  padding: '20px',
}));

export default function NavBar() {
  const dispatch = useDispatch();
  const handleChangeSearch = (event) => {
    dispatch(countryActions.filterCountries({ search: event.target.value }));
  };

  return (
    <Wrapp>
      <TextField
        type='text'
        placeholder='Search'
        onChange={handleChangeSearch}
      />
    </Wrapp>
  );
}
