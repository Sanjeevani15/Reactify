import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';

// import { About } from './components/About';

import { AuthProvider } from './components/auth';

import Navbar from './components/Navbar';
import { NoMatch } from './components/NoMatch';
import {Profile} from './components/Profile';
import { Login } from './components/Login';
import { RequireAuth } from './components/RequireAuth';
import About from './components/About.js';

function App() {
  return (
  <AuthProvider>

   <Navbar/>
   <Routes>
     {/* //we define the individual route using route component */}
     <Route path='/' element={<Home/>} />

      {/* lazy loading step 2 */}
     <Route path='about' element={<About/>} />

     {/* if there is a route which matches nothing  */}
     <Route path="*" element={<NoMatch/>}/>

    <Route path='profile' element={<RequireAuth><Profile/></RequireAuth>}></Route>
    <Route path='login' element={<Login/>}></Route>
     
   </Routes>

   </AuthProvider>
  );
}

export default App;
