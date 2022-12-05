import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MoreDetails from './components/MoreDetails/MoreDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/more-details/:id" element={ <MoreDetails /> } />
          <Route exact path="/" element={ <Home /> } />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
