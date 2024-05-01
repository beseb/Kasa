import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './layout/Header'
import Footer from './layout/Footer'

import About from './pages/About'
import Accueil from './pages/Accueil'
import Erreur from './pages/Erreur'
import LocationsPage from './pages/Location'
import LocationsItem from './components/LocationsItem'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Accueil" element={<Accueil />} />
        <Route path="/About" element={<About />} />
        <Route path="/Locations" element={<LocationsPage />}>
          <Route path=":id" element={<LocationsItem />} />
        </Route>
        <Route path="*" element={<Erreur />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
