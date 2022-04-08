import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

   const navigate=useNavigate()

  return (
    <>
    <div>This is your Home Page </div> 
    <button onClick={ ()=>{navigate('order-summary',{replace:true})}}>Place order</button>
    </>
  )
}
export default Home;

