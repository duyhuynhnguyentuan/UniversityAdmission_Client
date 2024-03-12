// App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Home/Header/Header';
import Home from './Pages/Home/Home';
import Major from './Pages/Major/Major';
import Universitys from './Pages/University/Universitys';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Home/Footer/Footer';
import SearchByScore from './Pages/SearchByScore/SearchByScore';
import HighSchool from './Pages/HighSchool/HighSchool';
import UniversityDetail from './Pages/UniversityDetail/UniversityDetail'; // Sửa lại đường dẫn
import { useParams } from 'react-router-dom';

function UniversityDetailWrapper() {
  const { code } = useParams<{ code?: string }>(); // Lấy code từ URL
  return code ? <UniversityDetail code={code} /> : null; // Kiểm tra nếu code tồn tại
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/university" element={<Universitys />} />
        {/* Sử dụng component UniversityDetailWrapper để truyền id */}
        <Route path="/university/:code" element={<UniversityDetailWrapper />} />
        <Route path="/major" element={<Major />} />
        <Route path="/score" element={<SearchByScore />} />
        <Route path="/highschool" element={<HighSchool />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
