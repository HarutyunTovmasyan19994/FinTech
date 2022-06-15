import React,{FC} from 'react';
import {Box,Typography} from '@mui/material';
import { FeaturedVideo } from '@mui/icons-material';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CreateAccount from './Registration/registration'
import './App.css'

const  App:FC = () => {
  return (
    <div className="App">
    <Box className="left">
            <Typography variant="body1" className="fintech">
                FinTech
            </Typography>
            <Typography variant="body1" className="home">
              Home
            </Typography>
            <Typography variant="body1" className='iconHome'>
                <HomeOutlinedIcon className="homelineIcon"/>
            </Typography>
            <Typography variant="body1" className="profile">
            Profile
            </Typography>
            <Typography variant="body1" className='profileIcon'>
                <PermIdentityOutlinedIcon className="profilprofileIconelineIcon"/>
            </Typography>
           </Box>
      <CreateAccount/>
    </div>
  );
}

export default App;
