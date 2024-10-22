import React from 'react'
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom' // Import Navigate

import { HiHome } from 'react-icons/hi'
import { MdGroup } from 'react-icons/md'
import { HiAcademicCap } from 'react-icons/hi'
import { BiAccessibility } from 'react-icons/bi'

import './App.css'
import Movie from './pages/Movie'
import Profile from './pages/Profile'
import Anime from './pages/anime'
import Game from './pages/game'
import MovieDetail from './pages/detail'; // Create this component

function App() {
  return (
    <BrowserRouter>
      <header>
        <p id="titleGroup">Kelompok 12</p>
      </header>
      <Routes>
        {/* Redirect from "/" to "/movie" */}
        <Route path="/" element={<Navigate to="/movie" />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/game" element={<Game />} />
        <Route path="/detail/:id" element={<MovieDetail />} />
      </Routes>
      <footer>
        <NavLink to="/movie" className="iconWrapper">
          <HiHome className="icon" /> Movie
        </NavLink>
        <NavLink to="/game" className="iconWrapper">
          <BiAccessibility className="icon" /> Game
        </NavLink>
        <NavLink to="/anime" className="iconWrapper">
          <HiAcademicCap className="icon" /> Anime
        </NavLink>
        <NavLink to="/profile" className="iconWrapper">
          <MdGroup className="icon" /> Profile
        </NavLink>
      </footer>
    </BrowserRouter>
  )
}

export default App
