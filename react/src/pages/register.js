import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/Authcontext'

export default function Register() 
{
    const { register } = useContext(AuthContext)
    
    const [username, setUsername] = useState()
    const [email, setemail] = useState()
    const [password, setPassword] = useState()



    const  handleRegister = (e) =>{
        e.preventDefault()
    
      register (username, email,  password)
    }
  return (
    <div className='container row my-7'>
        
        <form className='col-sm-6 bg-light rounded p-4 mt-5 border' >
            <h3>Register</h3>
            <div className="form-group mt-3">
                <label>Username</label>
                <input type="text" onChange={(e)=> setUsername(e.target.value) } className="form-control" placeholder="Enter username" />
            </div>
            <div className="form-group mt-3">
                <label>Email</label>
                <input type="text" onChange={(e)=> setemail(e.target.value) } className="form-control" placeholder="Enter email" />
            </div>
            <div className="form-group mt-3">
                <label>Password</label>
                <input type="password" onChange={(e)=> setPassword(e.target.value) } className="form-control" placeholder="Password" />
            </div>
            <button type="submit" onClick={handleRegister} className="mt-3 btn btn-primary">Register</button>
        </form>

        <div className='col-sm-6'></div>
    </div>
  )
}