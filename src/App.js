import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Course from './pages/Course';
import Home from './pages/Home';
import Week from './pages/Week';
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/course" element={<Course />} />
      <Route path="/weekone" element={<Week />} />
    </Routes>
  );
}