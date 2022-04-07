import React from 'react'
import { NavLink } from 'react-router-dom';
import { useAuth } from './auth';

const Navbar = () => {
  
  const navLinkStyles=({ isActive})=>{
        return{
            fontWeight: isActive ? 'bolder' : 'normal',
            color: isActive ? 'red':'white'
        }
  }

  const auth=useAuth();
  
    return (
      
    <nav className='primary-nav'>
        <NavLink style={navLinkStyles} to='/'>HOME</NavLink>
        <NavLink style={navLinkStyles} to='/about'>ABOUT</NavLink>
        <NavLink style={navLinkStyles} to='/profile'>PROFILE</NavLink>


        {
          !auth.user && ( <NavLink style={navLinkStyles} to='/login'>Login</NavLink>)
        }

    </nav>
    
  )
}


export default Navbar
