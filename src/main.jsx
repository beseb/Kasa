import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import About from './pages/About'
import Accueil from './pages/Accueil'
import Erreur from './pages/Erreur'
import Locations from './pages/Locations'
import '../public/data/logements.json'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
  <div className="app-container">
    <Header />
    <Routes>
      <Route path="/" element={<Accueil />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="*" element={<Erreur />}></Route>
      <Route path="/Locations/:id" element={<Locations />}></Route>
    </Routes>
    <Footer />
  </div>
</BrowserRouter>

  </React.StrictMode>,
)
