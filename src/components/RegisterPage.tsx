import React, { useState } from 'react';
import styles from './styles/RegisterPage.module.css';
import axios from 'axios';

const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // Make a POST request to the registration API endpoint
      const response = await axios.post('registration-api', {
        username,
        email,
        password,
        confirmPassword,
      });

      // Check if the registration was successful based on the response
      if (response.data.success) {
        setErrorMessage('');
        alert('Registration successful!'); // You may want to redirect the user instead
      } else {
        setErrorMessage(response.data.message); // Display any error message returned by the API
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setErrorMessage('An error occurred during registration');
    }
  };
  
  return (
    <section className={styles.vh100}>
      <div className={`${styles.mask} d-flex align-items-center h-100 ${styles.gradientCustom3}`}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className={styles.card} style={{ borderRadius: 15 }}>
                <div className="card-body p-5">
                  <h2 className="text-white text-center mb-5">Sign up</h2>
                  <form onSubmit={handleSubmit} className={styles.registerForm}>
                    <div className={`form-outline mb-4 ${styles.formOutline}`}>
                      <input type="text" id="name" className={styles.input} value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username'/>
                    </div>
                    <div className={`form-outline mb-4 ${styles.formOutline}`}>
                      <input type="email" id="email" className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
                    </div>
                    <div className={`form-outline mb-4 ${styles.formOutline}`}>
                      <input type="password" id="password" className={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
                    </div>
                    <div className={`form-outline mb-4 ${styles.formOutline}`}>
                      <input type="password" id="confirmPassword" className={styles.input} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm password'/>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button type="submit" className={styles.registerButton}>Sign up</button>
                    </div>
                    <p className={styles.loginText}>Have already an account? <a href="/login" className={styles.loginLink}><u>Login</u></a></p>
                  </form>
                  {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default RegisterPage;
