import React,{FC} from "react";
import './LogIn.css'




const LogIn:FC =() => {

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
                    <form className="formLogin">
                <span className="formEmail">
                       <label> Last Name</label>
                       <p>
                        <input type="email" className='inputEmail' />
                       </p>
                    </span>
                    <span className="formPassword">
                       <label > Last Name</label>
                       <p>
                        <input type="password" className='inputPassword'/>
                       </p>
                    </span>
                    <button className="btnLog">
                        Log In
                    </button>
                </form>
                </div>
                
            </div>
        </div>
    )
}

export default LogIn