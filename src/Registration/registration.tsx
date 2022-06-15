import React,{FC,useState,useEffect,ChangeEvent} from 'react'
import {Box,Typography} from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import './registration.css'
import { FeaturedVideo } from '@mui/icons-material';
import axios from 'axios';

interface iUser {
    firstName:string,
    lastName:string,
    email:string,
    password:string,
    reEnterPassword:string
}

const initialState:iUser ={
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    reEnterPassword:''
}
const SIN_UP = "https://fin-tech5.herokuapp.com/register"
const CreactAccount:FC = () =>{
    const[user,setUser] = useState<iUser>(initialState)
    const[showHide,setShowHide] = useState<boolean>(false);
    const[isError,setIsError] = useState<string>("")
    const[showHideRe,setShowHideRe] = useState<boolean>(false);
    const userForm = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
       
    }
    const suumbitHandle =(e:any) => {
        e.preventDefault()
         if(user.password != user.reEnterPassword){
            setIsError("Password and re-Enter password does not match")
        }
        axios.post(SIN_UP, {
          firstName:user.firstName,
          lastName:user.lastName,
           password:user.password,
           passwordConfirm:user.reEnterPassword,
          email: user.email
       }).then(resp=> {
        console.log(resp)
      }).catch(error=> {
        if (error.response) {
          console.log("error.response ", error.response);
        } else if (error.request) {
          console.log("error.request ", error.request);
        } else if (error.message) {
          console.log("error.message ", error.message);
        }
      });
           // fetch(SIN_UP,{
             //   method:"POST",
               // body: JSON.stringify({
                 //   "firstName":user.firstName,
                   // "lastName":user.lastName,
                    //"password":user.password,
                   // "passwordConfirm":user.reEnterPassword,
                   // "email": user.email
                //})

            //})
            setUser(initialState)
    }
    
    return(
        <Box className="box">
           <Box className="right">
            <Box className="welcome">
            <Typography variant="h4" className="welcometofintech">
            Welcome to <span>FINTECH</span>
            </Typography>
            <Typography variant='body1' className="createAccount">
            Create Account
            </Typography>
           
            <Box className='forms'>
                <form onSubmit={(e) => suumbitHandle(e)}>
                    <span className="form">
                    <label>First Name</label>
                    <p className='label'>
                         <input type="text" className='input' onChange={userForm} name="firstName" value={user.firstName}/> 
                    </p>
                    </span>
                    <span className="form">
                       <label > Last Name</label>
                       <p className="label">
                        <input type="text" className='input' onChange={userForm} name="lastName" value={user.lastName}/>
                       </p>
                    </span>
                    <span className="form">
                        <label >Email</label>
                    <p className='label'>
                         <input type="email" className='input' onChange={userForm} name="email" value={user.email}/>
                    </p>
                    </span>
                    <span className="form">
                        <label >Password</label>
                       <p className='label'>
                         <input type={showHide ? "text" : "password"} className='input' onChange={userForm} name="password" value={user.password}/>
                         <span className="showIcon">
                            {showHide ? < VisibilityOffIcon onClick={()=>setShowHide(prev => !prev)}/> : <VisibilityIcon onClick={()=>setShowHide(prev => !prev)}/>}
                         </span>
                        
                        </p> 
                    
                    </span>
                    <span className="form">
                       <label > Re-enter Password</label>
                       <p className='label'>
                        <input type={showHideRe ? "text" : "password"} className="input" onChange={userForm} name="reEnterPassword" value={user.reEnterPassword}/>
                        <span className="showIcon">
                            {showHideRe ? < VisibilityOffIcon onClick={()=>setShowHideRe(prev => !prev)}/> : <VisibilityIcon onClick={()=>setShowHideRe(prev => !prev)}/>}
                         </span>
                       </p>
                            <span className="errorPassword">
                                 {isError}
                            </span>
                    </span>
                    <button className="btn">
                    Sign Up
                    </button>
                    <span className='already'>
                      Already have an account?
                      <span className='login'>
                      Log In
                      </span>
                    </span>
                    </form>
            </Box>

            </Box>
            </Box>
        </Box>
    )
}
export default CreactAccount