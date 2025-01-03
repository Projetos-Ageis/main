import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/index.jsx'
import { Login } from './pages/Login/index.jsx'
import { Profile } from './pages/Profile/index.jsx'
import { Register } from './pages/Register/index.jsx'
import { MyPostos } from './pages/MyPostos/index.jsx'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />}/>
      <Route path="/mypostos" element={<MyPostos />}/>
    </Routes>
  )
}
