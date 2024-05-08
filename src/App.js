import React from 'react';
// import { Typography, AppBar } from '@mui/material';
// import { makeStyles } from '@mui/styles';

// import VideoPlayer from './components/VideoPlayer';
// import Options from './components/Options';
// import Notifications from './components/Notifications';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Appp from './components/Appp';

// const useStyles = makeStyles((theme) => ({
//   appBar: {
//     margin: '0',
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '600px',
//     border: '0px solid black',

//     [theme.breakpoints.down('xs')]: {
//       width: '90%',
//     },
//   },
//   image: {
//     marginLeft: '15px',
    
//   },
//   wrapper: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     width: '100%',
    
//   },
// }));

const App = () => {
//   const classes = useStyles();

  return (
    // <div className={classes.wrapper}>
    <BrowserRouter >
        <Routes>
          <Route path="/" element ={<Login/>} />
          <Route path="/register" element ={<Register/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/app" element ={<Appp/>} />
        </Routes>
      </BrowserRouter>
    //   {/* <AppBar className={classes.appBar} position="static" color="inherit">
    //     <Typography variant="h2" align="center">Video Chat</Typography>
    //   </AppBar>
    //   <VideoPlayer />
    //   <Options>
    //     <Notifications />
    //   </Options> */}
    // </div>
  );
};

export default App;