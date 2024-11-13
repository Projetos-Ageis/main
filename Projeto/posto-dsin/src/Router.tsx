import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/index.jsx'
import { Register } from './pages/Register/index.jsx'
import { Login } from './pages/Login/index.jsx'
import { Profile } from './pages/Profile/index.jsx'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />}/>
    </Routes>
  )
}
