import React,{ChangeEvent, FC,useState} from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
import './LogIn.css'

interface iLoginUser{
    email:string,
    password:string
}

const initialStateLogin :iLoginUser= {
email:"",
password:""
}
const URL =" https://fin-tech5.herokuapp.com/login"
const LogIn:FC =() => {
     const [loginPers,setLoginPers] = useState(initialStateLogin)

     const loginUserPers =(event:ChangeEvent<HTMLInputElement>) =>{
        const {name,value} = event.target
        setLoginPers({...loginPers,[name]:value})
    }
    const handleSubmitLogIn =(e:any) =>{
        e.preventDefault()
        axios.post(URL,{
            email:loginPers.email,
            password:loginPers.password
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
          })
    }
    console.log(loginPers)
    return(
        <div className="Login">
            <div className="wlecomeback">
                <h2 className="welBackFin">Welcome back 
                    <span>FinTech</span>
                </h2>
                <p className="loginword">
                Log In
                </p>
                <div>
                    <form className="formLogin" onSubmit={(e)=>handleSubmitLogIn(e)}>
                <span className="formEmail">
                       <label> Last Name</label>
                       <p>
                        <input type="email" className='inputEmail' name="email" value={loginPers.email} onChange={loginUserPers}/>
                       </p>
                    </span>
                    <span className="formPassword">
                       <label > Last Name</label>
                       <p>
                        <input type="password" className='inputPassword' name="password" value={loginPers.password} onChange={loginUserPers}/>
                       </p>
                    </span>
                    <button className="btnLog">
                        Log In
                    </button>
                    <p>
                        <Link to="/registration">
                         Registration
                        </Link>
                       
                        </p>
                </form>
                </div>
                
            </div>
        </div>
    )
}

export default LogIn