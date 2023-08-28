import { Grid } from '@mui/material';
import React from 'react';
import Navigation from '../Navigation/Navigation';
import HomeSection from '../HomeSection/HomeSection';
import RightPart from '../RightPart/RightPart';
import { Route, Routes } from 'react-router-dom';
import Profile from '../Profile/Profile';
import TweetDetails from '../TweetDetails/TweetDetails';

const Homepage = () => {
  return (
    <Grid item={true} container xs={12} className='px-5 lg:px-36 justify-between'>
      <Grid item={true} xs={0} lg={2.5} className='hidden lg:block w-full relative'>
        <Navigation />
      </Grid>
      <Grid item={true} xs={12} lg={6} className='px-5 lg:px-9 hidden lg:block w-full relative'>
        <Routes>
          <Route path='/' element={<HomeSection />} />
          <Route path='/home' element={<HomeSection />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='/twit/:id' element={<TweetDetails />} />
        </Routes>
      </Grid>

      <Grid item={true} xs={12} lg={3} className='hidden lg:block w-full relative'>
        <RightPart />
      </Grid>
    </Grid>
  );
};

export default Homepage;
