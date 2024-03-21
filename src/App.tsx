import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ProfilePage from './components/ProfilePage';
import SubjectCalPage from './components/SubjectCalPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Pages/Search/Search';
import Header from './Home/Header/Header';
import Home from './Pages/Home/Home';
import Major from './Pages/Major/Major';
import Universitys from './Pages/HighSchool/Universitys';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Home/Footer/Footer';
import AdminPage from './components/AdminPage';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/subject-calculator" element={<SubjectCalPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/highschool" element={<Universitys />} />
        <Route path="/major" element={<Major />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;