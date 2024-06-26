
import React from 'react';
import { Typography, AppBar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from "react-router-dom";

import VideoPlayer from './VideoPlayer';
import Options from './Options';
import Notifications from './Notifications';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  appBar: {
    margin: '0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '0px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
    
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center">Video Chat</Typography>
        <Link to='/login' className="btn btn-light my-5">Logout</Link>
      </AppBar>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
      <Footer />
    </div>
  );
};

export default App;