import React from 'react'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'
import ViewEmployeeComponent from './components/ViewEmployeeComponent'

const App = () => {
  return (
    <div className='d-flex flex-column min-vh-100' style={{backgroundColor:'#f0f8ff', minHeight: '100vh'}}>
      <BrowserRouter>
        <HeaderComponent/>
        <div className='container flex-grow-1 container py-4' style={{paddingTop:'70px',paddingBottom:'70px'}}>
          <Routes>
          {/* http://localhost:3000 */}
          <Route path='/' element={<ListEmployeeComponent/>} />
          {/* http://localhost:3000/employees */}
          <Route path='/employees' element={<ListEmployeeComponent/>} />
          {/* http://localhost:3000/add-employee */}
          <Route path='/add-employee' element={<EmployeeComponent/>} />
          {/* http://localhost:3000/edit-employee/1 */}
          <Route path='/edit-employee/:id' element={<EmployeeComponent/>} />
          {/* http://localhost:3000/view-employee/1 */}
          <Route path='/view-employee/:id' element={<ViewEmployeeComponent/>} />
        </Routes>
        </div>
        <FooterComponent/>
      </BrowserRouter>
    </div>
  )
}

export default App