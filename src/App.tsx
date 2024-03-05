import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './Pages/Search/Search';
import Header from './Home/Header/Header';
import Home from './Pages/Home/Home';
import Major from './Pages/Major/Major';
import Universitys from './Pages/HighSchool/Universitys';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/highschool" element={<Universitys />} />
        <Route path="/major" element={<Major />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;