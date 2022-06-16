import React from 'react'
import BoLogo from './Components/BoLogo'
import LoginPassword from './Components/LoginPassword'
import Help from './Components/Help'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import LoginMobilenumber from './Components/LoginMobilenumber'
import Auth from './Components/Auth'
import FogotPassword from './Components/FogotPassword'
import AuthFogot from './Components/AuthFogot'
import ResetPassword from './Components/ResetPassword'

export default function App() {
  return (
    <div className='App'>
      <BoLogo></BoLogo>
      <div className='right'>
        <Routes>
          <Route path='/login' element={<LoginPassword/>}></Route>
          <Route path='/mobile' element={<LoginMobilenumber/>}></Route>
          <Route path='/auth' element={<Auth/>}></Route>
          <Route path='/fogot' element={<FogotPassword/>}></Route>
          <Route path='/authfogot' element={<AuthFogot/>}></Route>
          <Route path='/resetpassword' element={<ResetPassword />}></Route>
        </Routes>
        <Help></Help>
      </div>
    </div>
  )
}
