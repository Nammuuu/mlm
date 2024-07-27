// "use client"
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import styles from '../../../../../styles/Profile/profileId.module.css';


// export default function Profile() {
//     const [profile, setProfile] = useState({
//       profile: '',
//       phoneNumber: '',
//       kycStatus: '',
      
//       userreferlink: '',

//       address1: '',
//       address2: '',
//       state: '',
//       pincode: '',

//       bankname: '',
//       accountnumbar: '',
//       ifcecode: '',
//       bankbranch: '',
//       bankfulladdress: '',

//       realname: '',
//       qr: '',
//       upiid: '',

//     });
  
//     useEffect(() => {
//       const fetchProfile = async () => {
//         try {
//           const token = localStorage.getItem('token');
//           const { data } = await axios.get('/api/user/profile/userid/id', {
//             headers: { Authorization: `Bearer ${token}` },
//           });
//           setProfile(data);
//         } catch (error) {
//           console.error('Error fetching profile:', error.response ? error.response.data : error.message);
//         }
//       };
  
//       fetchProfile();
//     }, []);
  
//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setProfile({ ...profile, [name]: value });
//     };
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       try {
//         const token = localStorage.getItem('token');
//         const { data } = await axios.put(`/api/user/profile/profileupdate/${profile.userId}`, profile, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setProfile(data);
//         alert('Profile updated successfully!');
//       } catch (error) {
//         console.error('Error updating profile:', error.response ? error.response.data : error.message);
//       }
//     };

//   return (
//     <form onSubmit={handleSubmit} className={styles.form}>
//       <div className={styles.formGroup}>
//         <label htmlFor="profile" className={styles.label}>Profile</label>
//         <input
//           type="text"
//           name="profile"
//           id="profile"
//           placeholder="Profile"
//           value={profile.profile}
//           onChange={handleChange}
//           className={styles.input}
//         />
//       </div>
//       <div className={styles.formGroup}>
//         <label htmlFor="phoneNumber" className={styles.label}>Phone Number</label>
//         <input
//           type="text"
//           name="phoneNumber"
//           id="phoneNumber"
//           placeholder="Phone Number"
//           value={profile.phoneNumber}
//           onChange={handleChange}
//           className={styles.input}
//         />
//       </div>

//       <div className={styles.formGroup}>
//         <label htmlFor="userreferlink" className={styles.label}>Ganret your refer link</label>
//         <input
//           type="text"
//           name="userreferlink"
//           id="userreferlink"
//           placeholder="refer link genret"
//           value={profile.userreferlink}
//           onChange={handleChange}
//           className={styles.input}
//         />
//       </div>


//       <div className={styles.formGroup}>
//         <label htmlFor="Address1" className={styles.label}>Phone Number</label>
//         <input
//           type="text"
//           name="address1"
//           id="address1"
//           placeholder="Address1"
//           value={profile.address1}
//           onChange={handleChange}
//           className={styles.input}
//         />
//         <input
//         type="text"
//         name="address2"
//         id="address2"
//         placeholder="Address2"
//         value={profile.address2}
//         onChange={handleChange}
//         className={styles.input}
//       />
//       <input
//       type="text"
//       name="state"
//       id="state"
//       placeholder="State"
//       value={profile.state}
//       onChange={handleChange}
//       className={styles.input}
//     />

//     <input
//     type="text"
//     name="pincode"
//     id="pincode"
//     placeholder="pincode"
//     value={profile.state}
//     onChange={handleChange}
//     className={styles.input}
//   />
//       </div>



//       <div className={styles.formGroup}>
//       <label htmlFor="bankname" className={styles.label}>Bank Details</label>
//       <input
//         type="text"
//         name="bankname"
//         id="bankname"
//         placeholder="Bank Name"
//         value={profile.bankname}
//         onChange={handleChange}
//         className={styles.input}
//       />
//       <input
//       type="numbar"
//       name="accountnumbar"
//       id="accountnumbar"
//       placeholder="Account Numbar"
//       value={profile.accountnumbar}
//       onChange={handleChange}
//       className={styles.input}
//     />
//     <input
//     type="text"
//     name="ifcecode"
//     id="ifcecode"
//     placeholder="ifcecode"
//     value={profile.ifcecode}
//     onChange={handleChange}
//     className={styles.input}
//   />

//   <input
//   type="text"
//   name="bankbranch"
//   id="bankbranch"
//   placeholder="bank branch"
//   value={profile.bankbranch}
//   onChange={handleChange}
//   className={styles.input}
// />

// <input
//   type="text"
//   name="bankpincode"
//   id="bankpincode"
//   placeholder="bank pin code (optional)"
//   value={profile.bankpincode}
//   onChange={handleChange}
//   className={styles.input}
// />

// <input
//   type="text"
//   name="bankfulladdress"
//   id="bankfulladdress"
//   placeholder="Bank full Address (optional)"
//   value={profile.bankfulladdress}
//   onChange={handleChange}
//   className={styles.input}
// />
//     </div>



//     <div className={styles.formGroup}>
//     <label htmlFor="realname" className={styles.label}>QR Information </label>
//     <input
//       type="text"
//       name="realname"
//       id="realname"
//       placeholder="Your name"
//       value={profile.realname}
//       onChange={handleChange}
//       className={styles.input}
//     />
//     <input
//     type="text"
//     name="qr"
//     id="qr"
//     placeholder="QR image"
//     value={profile.qr}
//     onChange={handleChange}
//     className={styles.input}
//   />
//   <input
//   type="text"
//   name="upiid"
//   id="upiid"
//   placeholder="upi id"
//   value={profile.upiid}
//   onChange={handleChange}
//   className={styles.input}
// />

//   </div>




//       <div className={styles.formGroup}>
//         <label htmlFor="kycStatus" className={styles.label}>KYC Status</label>
//         <select
//           name="kycStatus"
//           id="kycStatus"
//           value={profile.kycStatus}
//           onChange={handleChange}
//           className={styles.input}
//         >
//           <option value="non kyc">Non KYC</option>
//           <option value="active">Active</option>
//         </select>
//       </div>
//       <button type="submit" className={styles.button}>Update Profile</button>
//     </form>
//   );
// }



"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../../../../styles/Profile/profileId.module.css';

export default function Profile() {
  const [profile, setProfile] = useState({
    profile: '',
    phoneNumber: '',
    kycStatus: 'non kyc',
    userreferlink: '',
    address1: '',
    address2: '',
    state: '',
    pincode: '',
    bankname: '',
    accountnumbar: '',
    ifcecode: '',
    bankbranch: '',
    bankfulladdress: '',
    realname: '',
    qr: 'qi',
    upiid: '',
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
        console.error('Error fetching profile:', error.response ? error.response.data : error.message);
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
      const { data } = await axios.put(`/api/user/profile/profileupdate/${profile.userId}`, profile, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProfile(data);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="profile" className={styles.label}>Profile</label>
        <input
          type="text"
          name="profile"
          id="profile"
          placeholder="Profile"
          value={profile.profile}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="phoneNumber" className={styles.label}>Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="Phone Number"
          value={profile.phoneNumber}
          onChange={handleChange}
          className={styles.input}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="userreferlink" className={styles.label}>Generate Your Refer Link</label>
        <input
          type="text"
          name="userreferlink"
          id="userreferlink"
          placeholder="Refer Link"
          value={profile.userreferlink}
          onChange={handleChange}
          className={styles.input}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="address1" className={styles.label}>Address</label>
        <input
          type="text"
          name="address1"
          id="address1"
          placeholder="Address 1"
          value={profile.address1}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="text"
          name="address2"
          id="address2"
          placeholder="Address 2"
          value={profile.address2}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="text"
          name="state"
          id="state"
          placeholder="State"
          value={profile.state}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="text"
          name="pincode"
          id="pincode"
          placeholder="Pincode"
          value={profile.pincode}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="bankname" className={styles.label}>Bank Details</label>
        <input
          type="text"
          name="bankname"
          id="bankname"
          placeholder="Bank Name"
          value={profile.bankname}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="text"
          name="accountnumbar"
          id="accountnumbar"
          placeholder="Account Number"
          value={profile.accountnumbar}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="text"
          name="ifcecode"
          id="ifcecode"
          placeholder="IFSC Code"
          value={profile.ifcecode}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="text"
          name="bankbranch"
          id="bankbranch"
          placeholder="Bank Branch"
          value={profile.bankbranch}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="text"
          name="bankfulladdress"
          id="bankfulladdress"
          placeholder="Bank Full Address (Optional)"
          value={profile.bankfulladdress}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="realname" className={styles.label}>QR Information</label>
        <input
          type="text"
          name="realname"
          id="realname"
          placeholder="Your Name"
          value={profile.realname}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="text"
          name="qr"
          id="qr"
          placeholder="QR Image"
          value={profile.qr}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="text"
          name="upiid"
          id="upiid"
          placeholder="UPI ID"
          value={profile.upiid}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="kycStatus" className={styles.label}>KYC Status</label>
        <select
          name="kycStatus"
          id="kycStatus"
          value={profile.kycStatus}
          onChange={handleChange}
          className={styles.input}
        >
          <option value="non kyc">Non KYC</option>
          <option value="active">Active</option>
        </select>
      </div>
      <button type="submit" className={styles.button}>Update Profile</button>
    </form>
  );
}
