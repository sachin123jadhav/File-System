import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Login from './screen/Login'
import Dashboards from './screen/Dashboards'


import Home from './screen/Home'
import Error from './Error'
import HomeDashboard from './screen/HomeDashboard'
import ProtectedRoute from './utils/ProtectedRoute'


// import "../node_modules/bootstrap/dist/css/bootstrap.min.css" 

const App = () => {
  return (
    <>
      <Routes>
    
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<ProtectedRoute><Dashboards /></ProtectedRoute>}>

            <Route path="/" element={<ProtectedRoute><HomeDashboard /></ProtectedRoute>}></Route>
           
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>

    </>
  )
}

export default App