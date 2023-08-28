import React, { useState } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import { Avatar, Box, Button, Tab } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TweetCard from '../HomeSection/TweetCard';

const Profile = () => {
  const [tabValue, setTabValue] = useState('1');
  const nagative = useNavigate();

  const handleBack = () => nagative(-1);

  const handleOpenProfileModel = () => {
    console.log('open profile model');
  };

  const handleFollowUser = () => {
    console.log('open follow user');
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);

    if (newValue === 4) {
      console.log('tab 4');
    } else if (newValue === 1) {
      console.log('users twits');
    }
  };

  return (
    <div>
      <section className={`bg-white z-50 flex items-center sticky top-0 bg-opacity-95`}>
        <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack} />
        <h1 className='py-5 text-xl font-bold opacity-90 ml-5'>Code With Me</h1>
      </section>

      <section>
        <img
          className='w-[100%] h-[15rem] object-cover'
          src='https://cdn.pixabay.com/photo/2023/08/19/15/39/breakfast-8200753_640.jpg'
          alt=''
        />
      </section>

      <section className='pl-6'>
        <div className='flex justify-between items-start mt-5 h-[5rem]'>
          <Avatar
            className='transform -translate-y-24'
            alt='code with me'
            src='https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg'
            sx={{ width: '10rem', height: '10rem', border: '4px solid white' }}
          />

          {true ? (
            <Button
              onClick={handleOpenProfileModel}
              className='rounded-full'
              variant='contained'
              sx={{ borderRadius: '20px' }}
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              onClick={handleFollowUser}
              className='rounded-full'
              variant='contained'
              sx={{ borderRadius: '20px' }}
            >
              {true ? ' Follow' : 'Unfollow'}
            </Button>
          )}
        </div>
        <div>
          <div className='flex items-center'>
            <h1 className='font-bold text-lg'>Code with Me</h1>
            {true && (
              <img
                className='ml-2 w-5 h-5'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/800px-Twitter_Verified_Badge.png'
                alt=''
              />
            )}
          </div>
          <h1 className='text-gray-500'>@codewithme</h1>
        </div>
        <div className='mt-2 space-y-3'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem provident placeat
            voluptatibus est.
          </p>
          <div className='py-1 flex space-x-5'>
            <div className='flex items-center text-gray-500'>
              <BusinessCenterIcon /> <p className='ml-2'>Education</p>
            </div>
            <div className='flex items-center text-gray-500'>
              <LocationOnIcon /> <p className='ml-2'>Location</p>
            </div>
            <div className='flex items-center text-gray-500'>
              <CalendarMonthIcon /> <p className='ml-2'>Joined Jun 2022</p>
            </div>
          </div>
          <div className='flex items-center space-x-5'>
            <div className='flex items-center space-x-1 font-semibold'>
              <span>190</span>
              <span className='text-gray-500'>Following</span>
            </div>
            <div className='flex items-center space-x-1 font-semibold'>
              <span>590</span>
              <span className='text-gray-500'>Followers</span>
            </div>
          </div>
        </div>
      </section>

      <section className='py-5'>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={tabValue}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleTabChange} aria-label='lab API tabs example'>
                <Tab label='Twees' value='1' />
                <Tab label='Replies' value='2' />
                <Tab label='Media' value='3' />
                <Tab label='Likes' value='4' />
              </TabList>
            </Box>
            <TabPanel value='1'>
              {[1, 1, 1, 1].map((item) => (
                <TweetCard />
              ))}
            </TabPanel>
            <TabPanel value='2'>users replies</TabPanel>
            <TabPanel value='3'>Media</TabPanel>
            <TabPanel value='4'>Likes</TabPanel>
          </TabContext>
        </Box>
      </section>
    </div>
  );
};

export default Profile;
