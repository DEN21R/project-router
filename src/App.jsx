import { Routes, Route } from 'react-router'

import './App.css'
import Home from './pages/home'
//      const users = [
//     { id: 1, name: "Alex", bio: "Softwere engenier" },
//     { id: 2, name: "Alice", bio: "Admin" },
//     { id: 3, name: "Max", bio: "Manager" },
//   ];
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
