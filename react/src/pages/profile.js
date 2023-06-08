import {useContext} from 'react'
import { AuthContext } from '../context/Authcontext'

export default function Profile() 
{
  const {current_user} = useContext(AuthContext)

  console.log("Current user in profile ", current_user)
  return (
    <div>
      {current_user && current_user?
      <>
      <h1>Profile</h1>
      <h5>Username : {current_user && current_user.username}</h5>
      <h5>Email : {current_user && current_user.email}</h5>
      <h5>Date Joined : {current_user && current_user.created_at}</h5>
   </>:
   <div className='text-danger'>
    Login to access this page
   </div>
}
    </div>
  )
}