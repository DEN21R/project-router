import { Routes, Route } from 'react-router'

import './App.css'
import Home from './pages/home'
import UserProfile from './pages/userProfile'
import Users from './pages/users'
import Navbar from './components/navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  )
}

export default App
