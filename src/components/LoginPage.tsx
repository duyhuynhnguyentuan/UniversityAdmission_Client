import React, { useState } from 'react';
import styles from './styles/LoginPage.module.css';
import axios from 'axios';

const LoginPage: React.FC = () => {
  // State variables to store email, password, and error message
  const [email, setEmail] = useState(''); // Changed from username to email
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle form submission
  const handleLogin = async () => {
    if (!email || !password) {
      alert("Email/Password is required!!!");
      return;
    }

    try {
      // Make a POST request to your login API endpoint
      const response = await axios.post('https://universityadmission.onrender.com/api/v1/auth/login', {
        email,
        password,
      });
      console.log("check login", response.data.token);

      if (response.status === 200 && response.data.token) {
        if(response.data.role === 'admin'){
        setErrorMessage('');
        localStorage.setItem('token', response.data.token);
        window.location.href = '/admin';
        setIsLoggedIn(true);
        }else if (response.data.role === 'user'){
          setErrorMessage('');
        localStorage.setItem('token', response.data.token);
        window.location.href = '/home';
        setIsLoggedIn(true);
        }
      } else {
        setErrorMessage('Email hoặc mật khẩu chưa đúng!');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('Email hoặc mật khẩu chưa đúng!');
    }
  };

  return (
    <section className={styles.gradientCustom}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">; 
            <div className={styles.cardBackground} style={{ borderRadius: '1rem', marginTop: '-60px' }}>
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className={`fw-bold mb-2 ${styles.loginTitle}`}>Đăng Nhập</h2>
                    <div className={`form-outline form-white mb-4 ${styles.inputWrapper}`}>
                      <input 
                        type="email" 
                        id="typeEmailX" 
                        className={styles.input} 
                        placeholder='Email' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                      />
                    </div>
                    <div className={`form-outline form-white mb-4 ${styles.inputWrapper}`}>
                      <input
                        type="password" 
                        id="typePasswordX" 
                        className={styles.input} 
                        placeholder='Mật Khẩu' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                      />
                    </div>
                    <button className={styles.loginButton} onClick={() => handleLogin()}>Đăng Nhập</button>
                    <div className={styles.signupTextWrapper}>
                      <p className={styles.signupText}>Don't have an account? <a href="/register" className={styles.signupLink}>Đăng Ký</a></p>
                    </div>
                  {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default LoginPage;
