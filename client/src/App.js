import './App.css'
import { Route, Routes } from 'react-router'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import Login from './pages/Login'
import Feed from './pages/Feed'
import CreateReview from './pages/CreateReview'
import SearchResults from './pages/SearchResults'
import AlbumDetails from './pages/AlbumDetails'
import UserDetails from './pages/UserDetails'
// require('dotenv').config()

function App() {
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    localStorage.clear()
  }
  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <Navbar user={user} handleLogOut={handleLogOut} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/feed" element={<Feed user={user} />} />
          <Route path="/search/:search" element={<SearchResults />} />
          <Route
            path="/album/:albumName"
            element={<AlbumDetails user={user} />}
          />
          <Route
            path="/album/review/:albumName"
            element={<CreateReview user={user} />}
          />
          <Route path="/user-details" element={<UserDetails user={user} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
