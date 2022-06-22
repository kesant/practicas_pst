
import './App.css';
import Navigation from './components/Navigation';
import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
     <Navigation/>
    </Router>
  );
}


export default App;
