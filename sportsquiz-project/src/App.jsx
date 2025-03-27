import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components/HomePage'
import TestPage from './components/TestPage';
import DifficultyPage from './components/DifficultyPage';


function App() {
 

  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/difficulty" element={<DifficultyPage />} />
          <Route path="/test" element={<TestPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
