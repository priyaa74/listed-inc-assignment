import React from 'react'
import {Routes,Route} from 'react-router-dom';
import SignIn from './SignIn';
import Dashboard from './Dashboard';

function AllRoutes() {
  return (
    <div>
        <Routes>
         <Route path = '/' element={<SignIn/>}/>
         <Route path = '/dashboard' element={<Dashboard/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes