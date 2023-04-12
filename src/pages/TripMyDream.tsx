import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, styled } from '@mui/material';
import { continentsThunks } from '../store/modules/continents';
import ContinentCard from '../components/ContinentCard';
import { useAppDispatch, useAppSelector } from '../store/hook';

const ContinentWrapper = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
}));

export default function TripMyDream() {
  const { continents } = useAppSelector((state) => state.continentsReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        await dispatch(continentsThunks.fetchContinents());
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <ContinentWrapper>
      {continents.map((continent) => (
        <ContinentCard
          key={continent.key}
          continentName={continent.continentName}
          imageSrc={continent.image}
          description={continent.description}
          country={continent.countries}
        />
      ))}
    </ContinentWrapper>
  );
}
