import { useState } from 'react'

// import libreria routing
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import delle pages
import Layout from './layouts/Layout'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
