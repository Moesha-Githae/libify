import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/Authcontext'

export default function Login() 
{
    const {login} = useContext(AuthContext)
    
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()


    const  handleSubmit = (e) =>{
        e.preventDefault()
    
       login(username, password)
    }
  return (
    <div className='container row my-10'>
        
        <form className='col-sm-6 bg-light rounded p-4 mt-5 border' onSubmit={handleSubmit}>
            <h3>Login</h3>
            <div className="form-group mt-3">
                <label>Username</label>
                <input type="text" onChange={(e)=> setUsername(e.target.value) } className="form-control" placeholder="Enter email" />
            </div>
            <div className="form-group mt-3">
                <label>Password</label>
                <input type="password" onChange={(e)=> setPassword(e.target.value) } className="form-control" placeholder="Password" />
            </div>
            <button type="submit" className="mt-3 btn btn-primary">Login</button>
        </form>

        <div className='col-sm-6'></div>
    </div>
  )
}