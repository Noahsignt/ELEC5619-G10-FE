import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Course from './pages/Course';
import NewTopic from './pages/NewTopic';
import Home from './pages/Home';
import Week from './pages/Week';
import Quiz from './pages/Quiz';
import Friends from './pages/Friends';
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/course" element={<Course />} />
      <Route path="/weekone" element={<Week />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/newtopic" element={<NewTopic />} /> 
      <Route path="/friends" element={<Friends />} /> 
    </Routes>
  );
}