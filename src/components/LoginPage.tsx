import React, { useState } from 'react';
import styles from './styles/LoginPage.module.css'; // Import the CSS Module
import axios from 'axios'; // Import Axios

const LoginPage: React.FC = () => {
  // State variables to store email, password, and error message
  const [email] = useState(''); // Changed from username to email
  const [password] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // Make a POST request to your login API endpoint
      const response = await axios.post('/login", loginUserCtrl', {
        email,
        password,
      });

      if (response.data.success) {
        setErrorMessage('');
        alert('Login successful!');
        // Redirect to another page or perform any other action upon successful login
      } else {
        setErrorMessage('Invalid email or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('An error occurred during login');
    }
  };

  return (
    <section className={styles.gradientCustom}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className={styles.cardBackground} style={{ borderRadius: '1rem' }}>
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className={`fw-bold mb-2 ${styles.loginTitle}`}>Login</h2>
                  <form onSubmit={handleSubmit} className={styles.loginForm}>
                    <div className={`form-outline form-white mb-4 ${styles.inputWrapper}`}>
                      <input type="email" id="typeEmailX" className={styles.input} placeholder='Email address' />
                    </div>
                    <div className={`form-outline form-white mb-4 ${styles.inputWrapper}`}>
                      <input type="password" id="typePasswordX" className={styles.input} placeholder='Password' />
                    </div>
                    <p className={`small mb-5 pb-lg-2 ${styles.forgotPassword}`}><a className="text-white-50" href="#!">Forgot password?</a></p>
                    <button className={styles.loginButton} type="submit">Login</button>
                    <div className={styles.signupTextWrapper}>
                      <p className={styles.signupText}>Don't have an account? <a href="/register" className={styles.signupLink}>Sign Up</a></p>
                    </div>
                  </form>
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
