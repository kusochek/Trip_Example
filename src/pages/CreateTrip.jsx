import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Box, Button, Stack, styled,
} from '@mui/material';
import { InputText } from '../components/Forms/InputText';
import { tripRules } from '../constants/rules';

const FormStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: 'auto',
  boxSizing: 'border-box',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

const FormStack = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: 'auto',
  marginBottom: theme.spacing(3),
  boxSizing: 'border-box',
  [theme.breakpoints.down('sm')]: {},
  '& > *:last-of-type': {
    marginBottom: theme.spacing(4),
  },
}));

export default function CreateTrip() {
  const { control, handleSubmit, getValues } = useForm();

  const onSubmit = () => {
    console.log(getValues());
  };

  return (
    <FormStyled>
      <FormStack>
        <InputText
          fullWidth
          control={control}
          name='continent'
          label='Continent'
          rules={tripRules.continent}
        />
        <InputText
          fullWidth
          control={control}
          name='country'
          label='Country'
          rules={tripRules.country}
        />
        <InputText
          fullWidth
          required
          name='city'
          control={control}
          rules={tripRules.city}
          label='City'
          margin='normal'
        />
        <InputText
          fullWidth
          required
          name='price'
          control={control}
          rules={tripRules.price(100)}
          label='Price'
          margin='normal'
        />
        <InputText
          fullWidth
          required
          name='photo'
          control={control}
          rules={tripRules.photo}
          label='Photo'
          margin='normal'
        />
        <InputText
          fullWidth
          required
          name='description'
          control={control}
          rules={tripRules.description}
          label='Description'
          margin='normal'
        />
        <Button
          fullWidth
          size='large'
          onClick={handleSubmit(onSubmit)}
        >
          Add new trip
        </Button>
      </FormStack>
    </FormStyled>
  );
}
