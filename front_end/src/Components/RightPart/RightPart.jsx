import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { Button } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SubscriptionModal from '../SubscriptionModal/SubscriptionModal';

const RightPart = () => {
  const handleChangeTheme = () => {
    console.log('handle change theme');
  };

  const [openSubscriptionModal, setOpenSubscriptionModal] = React.useState(false);
  const handleOpenSubscriptionModal = () => setOpenSubscriptionModal(true);
  const handleCloseSubscriptionModal = () => setOpenSubscriptionModal(false);
  return (
    <div className='py-5 sticky top'>
      <div className='relative flex items-center'>
        <input type='text' className='py-3 rounded-full text-gray-500 w-full pl-12' />
        <div className='absolute top-0 left-0 pl-3 pt-3'>
          <SearchIcon className='text-gray-500' />
        </div>
        <Brightness4Icon className='ml-3 cursor-pointer' onClick={handleChangeTheme} />
      </div>
      <section className='my-5'>
        <h1 className='text-xl font-bold'>Get Verified</h1>
        <h1 className='font-bold my-2'>Subcribe to unlock new Features</h1>
        <Button
          variant='contained'
          sx={{ padding: '10px', paddingX: '20px', borderRadius: '25px' }}
          onClick={handleOpenSubscriptionModal}
        >
          Get Verified
        </Button>
      </section>
      <section className='mt-7 space-y-5'>
        <h1 className='font-bold text-xl py-1'>Trends for you</h1>
        {[1, 1, 1, 1].map((item) => (
          <div className='flex justify-between w-full'>
            <div>
              <p className='text-sm'>Only on Twitter · Trending</p>
              <p className='font-bold'>#ENGLOTxMGTBKKSRI2024</p>
              <p>503.7K posts</p>
            </div>
            <MoreHorizIcon />
          </div>
        ))}
      </section>
      <section>
        <SubscriptionModal
          open={openSubscriptionModal}
          handleClose={handleCloseSubscriptionModal}
        />
      </section>
    </div>
  );
};

export default RightPart;
