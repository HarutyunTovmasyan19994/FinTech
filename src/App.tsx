import React,{FC} from 'react';
import {Box,Typography} from '@mui/material';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomePage from "./Home/Home"
import{Routes,Route,Link} from 'react-router-dom'
import CreateAccount from './Registration/registration'
import LogIn from './LogIn/LogIn'
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
              <Link to="login">
            Profile
            </Link>
            </Typography>
            <Typography variant="body1" className='profileIcon'>
                <PermIdentityOutlinedIcon className="profilprofileIconelineIcon"/>
            </Typography>
            
           </Box>

           <div className="rightSection">
            <Routes>
            <Route path="/" element={<HomePage/>}/>
              <Route path="login" element={<LogIn/>}/>
              <Route path="registration" element={<CreateAccount/>}/>
            </Routes>
            
           </div>
     
    </div>
  );
}

export default App;
