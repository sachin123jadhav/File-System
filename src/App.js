import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Login from './screen/Login'
import Dashboards from './screen/Dashboards'


import Home from './screen/Home'
import Error from './Error'
import HomeDashboard from './screen/HomeDashboard'
import ProtectedRoute from './utils/ProtectedRoute'
import DataTable from './components/shared/DataTable'


// import "../node_modules/bootstrap/dist/css/bootstrap.min.css" 

const data = [
  { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Smith', age: 30 },
  { id: 3, name: 'John Doe', age: 25 },
  { id: 4, name: 'Jane Smith', age: 30 },
  { id: 5, name: 'John Doe', age: 25 },
  { id: 6, name: 'Jane Smith', age: 30 },
  { id: 7, name: 'John Doe', age: 25 },
  { id: 8, name: 'Jane Smith', age: 30 },
  { id: 9, name: 'John Doe', age: 25 },
  { id: 10, name: 'Jane Smith', age: 30 },
  { id: 11, name: 'John Doe', age: 25 },
  { id: 12, name: 'Jane Smith', age: 30 },
  
];

const columns = [
  { Header: 'ID', accessor: 'id' },
  { Header: 'Name', accessor: 'name' },
  { Header: 'Age', accessor: 'age' },
];



const App = () => {
  return (
    <>
      <Routes>
    
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<ProtectedRoute><Dashboards /></ProtectedRoute>}>

            <Route path="/" element={<ProtectedRoute><HomeDashboard /></ProtectedRoute>}></Route>
          
            <Route path="/DataTable" element={<DataTable data={data} columns={columns} />} />
        </Route>
      

        <Route path="*" element={<Error />} />
      </Routes>
      
    </>
  )
}

export default App