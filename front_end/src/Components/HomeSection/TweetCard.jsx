import React, { useState } from 'react';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReplyModal from './ReplyModal';

const TweetCard = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [openReplyModal, setOpenReplyModal] = useState(false);
  const handleOpenReplyModal = () => setOpenReplyModal(true);
  const handleCloseReplyModal = () => setOpenReplyModal(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteTweet = () => {
    console.log('delete tweet');
    handleClose();
  };

  const handleOpenReplyModel = () => {
    console.log('open model');
  };

  const handleCreateRetweet = () => {
    console.log('handle create retweet');
  };

  const handleLikeTweet = () => {
    console.log('handle like tweet');
  };
  return (
    <React.Fragment>
      {/* {   <div className='flex items-center font-semibold text-gray-700 py-2'>
        <RepeatIcon />
        <p>You Retweet</p>
      </div>} */}
      <div className='flex space-x-5'>
        <Avatar
          onClick={() => navigate(`/profile/${6}`)}
          className='cursor-pointer'
          alt='username'
          src='https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg'
        />
        <div className='w-full'>
          <div className='flex justify-between items-center'>
            <div className='flex cursor-pointer items-center space-x-2'>
              <span className='font-semibold'>Code With NgoLoc</span>
              <span className='text-gray-600'>@abc.com .2m</span>
              <img
                className='ml-2 w-5 h-5'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/800px-Twitter_Verified_Badge.png'
                alt=''
              />
            </div>
            <div>
              <Button
                id='basic-button'
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <MoreHorizIcon />
              </Button>
              <Menu
                id='basic-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                <MenuItem onClick={handleDeleteTweet}>Edit</MenuItem>
              </Menu>
            </div>
          </div>

          <div className='mt-2'>
            <div onClick={() => navigate(`/twit/${3}`)} className='cursor-pointer'>
              <p className='mb-2 p-0'>
                twitter clone - full stack project with spring boot and reactJS
              </p>
              <img
                className='w-[28rem] border border-gray-400 p-5 rounded-md'
                src='https://media.npr.org/assets/img/2022/11/05/ap22308655707966_custom-c1db47329380a981277bdc2dd6fc72db68e2e757-s1100-c50.jpg'
                alt=''
              />
            </div>
            <div className='py-5 flex flex-wrap justify-between items-center'>
              <div className='space-x-3 flex items-center text-gray-600'>
                <ChatBubbleOutlineIcon className='cursor-pointer' onClick={handleOpenReplyModal} />
                <p>43</p>
              </div>
              <div
                className={`${
                  true ? 'text-pink-600' : 'text-gray-600'
                } space-x-3 flex items-center`}
              >
                <RepeatIcon onCLick={handleCreateRetweet} className='cursor-pointer' />
                <p>54</p>
              </div>
              <div
                className={`${
                  true ? 'text-pink-600' : 'text-gray-600'
                } space-x-3 flex items-center`}
              >
                {true ? (
                  <FavoriteIcon onCLick={handleLikeTweet} className='cursor-pointer' />
                ) : (
                  <FavoriteBorderIcon onCLick={handleLikeTweet} className='cursor-pointer' />
                )}
                <p>54</p>
              </div>
              <div className='space-x-3 flex items-center text-gray-600'>
                <BarChartIcon className='cursor-pointer' onCLick={handleOpenReplyModel} />
                <p>430</p>
              </div>
              <div className='space-x-3 flex items-center text-gray-600'>
                <FileUploadIcon className='cursor-pointer' onCLick={handleOpenReplyModel} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <ReplyModal open={openReplyModal} handleClose={handleCloseReplyModal} />
      </section>
    </React.Fragment>
  );
};

export default TweetCard;
