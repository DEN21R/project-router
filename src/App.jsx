import { Routes, Route } from 'react-router'

import './App.css'
import Home from './pages/home'
import UserProfile from './pages/userProfile'
import Users from './pages/users'
import Navbar from './components/navbar'

const users = [
  { id: 1, name: 'Alex', age: 32, bio: 'Softwere engenier' },
  { id: 2, name: 'Alice', age: 35, bio: 'Admin' },
  { id: 3, name: 'Max', age: 28, bio: 'Manager' },
]

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users users={users} />} />
        <Route path="/users/:userId" element={<UserProfile users={users} />} />
      </Routes>
    </div>
  )
}

export default App
