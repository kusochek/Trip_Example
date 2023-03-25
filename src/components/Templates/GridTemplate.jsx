import React from 'react';
import { Grid, Box, styled } from '@mui/material';
import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';

const HeaderWrapper = styled(Box)(() => ({
  backgroundColor: 'rgb(193, 235, 255)',
  height: '150px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const NavBarWrapper = styled(Box)(() => ({
  backgroundColor: 'rgb(177, 193, 221)',
  height: '100vh',
}));

const Body = styled(Box)(() => ({
  backgroundColor: 'white',
  padding: '25px',
  height: '100vh',
  overflow: 'auto',
}));

const FooterWrapper = styled(Box)(() => ({
  backgroundColor: 'rgb(193, 235, 255)',
  height: '200px',
  display: 'flex',
  alignItems: 'center',
}));

export default function GridTemplate({ children }) {
  return (
    <Grid container>
      <Grid item lg={3}>
        <HeaderWrapper />
      </Grid>
      <Grid item lg={9}>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
      </Grid>
      <Grid item lg={3}>
        <NavBarWrapper>
          <NavBar />
        </NavBarWrapper>
      </Grid>
      <Grid item lg={9}>
        <Body>
          {children}
        </Body>
      </Grid>
      <Grid item lg={12}>
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </Grid>
    </Grid>
  );
}
