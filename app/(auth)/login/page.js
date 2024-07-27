'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
// import styles from '../../styles/Login.module.css';

import styles from '../../../pagedesign/Login.module.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();
  
  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/userLogin', { email, password });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      console.log('Logged in successfully');
      router.push('/');
    } catch (error) {
      console.error('Login failed:', error.response?.data?.message || error.message);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1 className={styles.title}>Login</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className={styles.input}
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className={styles.input}
          required
        />
        <button type="button" onClick={handleLogin} className={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default Login;
