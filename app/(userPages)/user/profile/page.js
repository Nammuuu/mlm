'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../../../styles/user/viewprofile.module.css'
import imgg from "../../../../public/user.png"

const UserProfile = () => {
  const [data, setData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        router.push('/login');
        return;
      }
      try {
        const response = await axios.get('/api/user/profile/profileupdate/getproinfo', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setData(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  if (!data) return <p>Loading...</p>;

  const { user, profile } = data;

  return (
    <div className={styles.profileContainer}>
      <h1 className={styles.profileHeader}>User Profile</h1>
      <div className={styles.profileDetails}>
      <Image src={imgg} alt="Profile" className={styles.profileImage} width={150} height={150} />
         <Image src={user.profileImage} alt="Profile" className={styles.profileImage} width={150} height={150} />
        <div className={styles.formGroup}>
          <label>User ID:</label>
          <span>{user._id}</span>
        </div>
        <div className={styles.formGroup}>
          <label>Username:</label>
          <span>{user.username}</span>
        </div>
        <div className={styles.formGroup}>
          <label>Email:</label>
          <span>{user.email}</span>
        </div>
        <div className={styles.formGroup}>
          <label>Phone Number:</label>
          <span>{profile.phoneNumber}</span>
        </div>
        <div className={styles.formGroup}>
          <label>My Refer Link:</label>
          <span>{profile.userreferlink}</span>
        </div>
        <div className={styles.formGroup}>
          <h2>My Address</h2>
          <label>Address 1:</label>
          <span>{profile.address1}</span>
          <label>Address 2:</label>
          <span>{profile.address2}</span>
          <label>State:</label>
          <span>{profile.state}</span>
          <label>Local Pin Code:</label>
          <span>{profile.pincode}</span>
        </div>
        <div className={styles.formGroup}>
          <h2>Bank Details</h2>
          <label>Bank Name:</label>
          <span>{profile.bankname}</span>
          <label>Account Number:</label>
          <span>{profile.accountnumbar}</span>
          <label>IFCE Code:</label>
          <span>{profile.ifcecode}</span>
          <label>Bank Branch:</label>
          <span>{profile.bankbranch}</span>
          <label>Bank Full Address:</label>
          <span>{profile.bankfulladdress}</span>
        </div>
        <div className={styles.formGroup}>
          <h2>QR Code</h2>
          <label>Real Name:</label>
          <span>{profile.realname}</span>
          <label>QR:</label>
          <span>{profile.qr}</span>
          <label>Your UPI ID:</label>
          <span>{profile.upiid}</span>
        </div>
        <div className={styles.formGroup}>
          <label>User KYC Status:</label>
          <span>{profile.kycStatus === 'done' ? 'Done' : 'Non KYC'}</span>
        </div>
        <div className={styles.updateLink}>
          <Link href={`/user/profile/${user._id}`}>Update your information (edit)</Link>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
