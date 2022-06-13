import React,{FC} from 'react'
import {Box,Typography,TextField} from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import './registration.css'

const CreactAccount:FC = () =>{
    return(
        <Box className="box">
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
        
           <Box className="right">
            <Box className="welcome">
            <Typography variant="h4" className="welcometofintech">
            Welcome to <span>FINTECH</span>
            </Typography>
            <Typography variant='body1' className="createAccount">
            Create Account
            </Typography>
           
            <Box component="form" className='forms'>
                    <span className="form">
                    <label>First Name</label>
                    <p className='label'>
                         <input type="text" className='input'/> 
                    </p>
                    </span>

                    <span className="form">
                       <label > Last Name</label>
                       <p className="label">
                        <input type="text" className='input'/>
                       </p>
                    </span>
                    <span className="form">
                        <label >Email</label>
                    <p className='label'>
                         <input type="email" className='input'/>
                    </p>
                    </span>
                    <span className="form">
                        <label >Password</label>
                       <p className='label'>
                         <input type="password" className='input'/>
                        </p> 
                    
                    </span>
                    <span className="form">
                       <label > Re-enter Password</label>
                       <p className='label'>
                        <input type="password" className="input"/>
                       </p>
            
                    </span>
            </Box>

            </Box>
            </Box>
        </Box>
    )
}
export default CreactAccount