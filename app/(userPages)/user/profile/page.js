// 'use client';

// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import Image from 'next/image';
// import styles from '../../../../styles/user/viewprofile.module.css'


// const UserProfile = () => {
//   const [data, setData] = useState(null);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       const token = localStorage.getItem('token');
//       console.log("token", token);

//       if (!token) {
//         router.push('/login');
//         return;
//       }
//       try {
//         const response = await axios.get('/api/user/profile/profileupdate/getproinfo', {
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         });
//         console.log("response data", response.data);  // Log the response data
//         setData(response.data);
//       } catch (error) {
//         console.error('Error fetching user profile:', error);
//       }
//     };

//     fetchUserProfile();
//   }, []);

//   if (!data) return <p>Loading...</p>;

//   const { user, profile } = data;

//   return (
//     <div>
//       <h1>User Profile</h1>
//       <div>
//         <img src={user.profileImage} alt="Profile" />
//         <span>User profile image</span>
//       </div>
//       <p>User ID: {user._id}</p>
//       <p>Username: {user.username}</p>
//       <p>Email: {user.email}</p>
      
//       <p>Phone Number: {profile.phoneNumber}</p>
//       <p>My Refer Link: {profile.userreferlink}</p>

//       <div>
//         <h1>My Address</h1>     
//         <p>Address 1: <span>{profile.address1}</span></p>
//         <p>Address 2: <span>{profile.address2}</span></p>
//         <p>State: <span>{profile.state}</span></p>
//         <div>
//           <p>Local Pin Code: </p>
//           <span>{profile.pincode}</span>
//         </div>
//       </div>

//       <div>
//         <h1>Bank Details</h1>
//         <div>
//           <p>Bank Name: </p>
//           <span>{profile.bankname}</span>
//         </div>
//         <div>
//           <p>Account Number: </p>
//           <span>{profile.accountnumbar}</span>
//         </div>
//         <div>
//           <p>IFCE Code: </p>
//           <span>{profile.ifcecode}</span>
//         </div>
//         <div>
//           <p>Bank Branch: </p>
//           <span>{profile.bankbranch}</span>
//         </div>
//         <div>
//           <p>Bank Full Address: </p>
//           <span>{profile.bankfulladdress}</span>
//         </div>
//       </div>

//       <div>
//         <h1>QR Code</h1>
//         <div>
//           <p>Real Name: </p>
//           <span>{profile.realname}</span>
//         </div>
//         <div>
//           <p>QR: </p>
//           <span>{profile.qr}</span>
//         </div>
//         <p>Your UPI ID: <span>{profile.upiid}</span></p>
//       </div>

//       <p>
//         User KYC Status: <span>{profile.kycStatus === 'done' ? 'Done' : 'Non KYC'}</span>
//       </p>

//       <div>
//         <Link href={`/user/profile/${user._id}`}>Update your information (edit)</Link>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;



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
