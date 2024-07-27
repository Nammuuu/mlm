"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../../styles/Profile/profileId.module.css';
import Link from 'next/link';

export default function Profile() {
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState({
      aadhar: '',
      pan: '',
      kycStatus: '',
    });
  
    useEffect(() => {
      const fetchProfile = async () => {
        try {
          const token = localStorage.getItem('token');
          const { data } = await axios.get('/api/user/profile/userid/id', {
            headers: { Authorization: `Bearer ${token}` },
          });
          setProfile(data);
          
        } catch (error) {
          console.error('Error fetching aadhar && pan:', error.response ? error.response.data : error.message);
        }
      };
  
      fetchProfile();
    }, []);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setProfile({ ...profile, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const token = localStorage.getItem('token');
        const { data } = await axios.put(`/api/user/Kyc/${profile.userId}`, profile, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(data);
        alert('aadhar and pan card updated successfully!');
      } catch (error) {
        console.error('Error updating aadhar and pan card:', error.response ? error.response.data : error.message);
      }
    };

   

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="aadhar" className={styles.label}>Aadhar Numbar</label>
        <input
          type="text"
          name="aadhar"
          id="aadhar"
          placeholder="Aadhar Numbar"
          value={profile.profile}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="pan" className={styles.label}>pan Number</label>
        <input
          type="text"
          name="pan"
          id="pan"
          placeholder="pan Number"
          value={profile.phoneNumber}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="kycStatus" className={styles.label}>Upload a photo Aadhar card && pan card</label>
        <select
          name="kycStatus"
          id="kycStatus"
          value={profile.kycStatus}
          onChange={handleChange}
          className={styles.input}
        >
          <option value="non kyc">Addhar card</option>
          <option value="active">pan card</option>
        </select>
      </div>
      <button type="submit" className={styles.button}>Update Profile</button>

      link to kyc with id 
      <Link href={`/kyc/${profile.userId}`}>MyApp</Link>
    </form>

    
  );
}
