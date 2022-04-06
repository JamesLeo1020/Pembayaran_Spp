import React from "react"
import { Route, Routes} from "react-router-dom";

import './App.css';

// pages
import Login from './Pages/Login'
import Siswa from './Pages/Siswa'
import Dashboard from './Pages/Dashboard'
import Setting from './Pages/Setting'

export default function App() {
  return (
    <div className="absolute bg-gray-200 w-full h-full">
      <Routes>
        <Route exact path='/' element={<Dashboard/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/siswa/:nisn' element={<Siswa/>}/>
        <Route path='/siswa' element={<Siswa/>}/>
        <Route path='/setting' element={<Setting/>}/>
      </Routes>
    </div>
  );
}

