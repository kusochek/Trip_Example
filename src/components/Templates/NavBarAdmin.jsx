import {
  Box, styled, TextField, Typography,
} from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { countryActions } from '../../store/modules/countries';

const Wrapp = styled(Box)(() => ({
  padding: '20px',
}));

export default function NavBarAdmin() {
  const dispatch = useDispatch();
  const handleChangeSearch = (event) => {
    dispatch(countryActions.filterCountries({ search: event.target.value }));
  };

  return (
    <Wrapp>
      <Typography variant='h5' component='h5'>
        <Link to='/tripmydream/create' style={{ color: 'white' }}>Create Trip</Link>
      </Typography>
      <TextField
        type='text'
        placeholder='Search'
        onChange={handleChangeSearch}
      />
    </Wrapp>
  );
}
