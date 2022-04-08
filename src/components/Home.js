import React from 'react'
import { useNavigate } from 'react-router-dom';
import Table from './Table';

const Home = () => {

   const navigate=useNavigate()

  return (
    <>
    <div>This is your Home Page </div> 
    <button onClick={ ()=>{navigate('order-summary',{replace:true})}}>Place order</button>
    <Table/>
    </>
   

  )
}
export default Home;

