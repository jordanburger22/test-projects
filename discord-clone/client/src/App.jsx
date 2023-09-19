import { useState } from 'react'
import { Routes, Route, BrowserRouter, Link, Navigate } from 'react-router-dom'
import './App.css'
import LoginPage from './authPages/login/LoginPage'
import RegisterPage from './authPages/register/RegisterPage'
import Dashboard from './dashboard/Dashboard'
import AlertNotification from './shared/components/AlertNotification'

function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path='/login' element = {< LoginPage />}/>
          <Route path = '/register' element = {<RegisterPage />}/>
          <Route path = "/dashboard" element = {<Dashboard />}/>
          <Route path = "/" element = {<Dashboard />}/>
        </Routes>

      </BrowserRouter>
      <AlertNotification />
    </>
  )
}

export default App
