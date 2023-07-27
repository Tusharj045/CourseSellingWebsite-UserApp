import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import CoursesPage from './pages/CoursesPage/CoursesPage';
import CoursePage from './pages/CoursePage/CoursePage';
import PurchasedCoursesPage from './pages/PurchasedCoursesPage/PurchasedCoursesPage';
import SignupPage from './pages/SignupPage/SignupPage';
import AppBar from './components/AppBar/AppBar';
import './App.css';

function App() {
  return (
    <div >
      <Router>
        <AppBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/purchased_courses" element={<PurchasedCoursesPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
