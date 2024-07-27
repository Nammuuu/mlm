
// "use client";

// import Link from 'next/link';
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import {jwtDecode} from 'jwt-decode';
// import styles from '../../styles/Navbar.module.css';

// const Navbar = () => {
//   const [user, setUser] = useState(null);
//   const [userId, setUserId] = useState(null);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const router = useRouter();


//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       const decoded = jwtDecode(token);
//       setUser(decoded);
//       setUserId(decoded.userId);
//     }
//   }, []);

//   const handleSignOut = () => {
//     localStorage.removeItem('token');
//     router.push('/login');
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.logo}>
//         <Link href="/">MyApp</Link>
//       </div>
//       <div className={styles.menuIcon} onClick={toggleMenu}>
//         <span className={styles.bar}></span>
//         <span className={styles.bar}></span>
//         <span className={styles.bar}></span>
//       </div>
//       <ul className={`${styles.navItems} ${menuOpen ? styles.active : ''}`}>
//         <li><Link href="/">Home</Link></li>
//         <li><Link href="/register">Register</Link></li>
//         <li><Link href="/login">Login</Link></li> 
//         <li><Link href="/kyc">Kyc</Link></li> 
//         <li><Link href="/support">support</Link></li>     
//         <li><Link href="/contactUs">ContactUs</Link></li>
        
//         <Link href={`/Kyc/${userId}`}>kyc with id</Link>
//         {user && (
//           <>
//             <li><Link href="/user/profile">View Profile</Link></li>
//             <li><Link href="/dashboard">Dashboard</Link></li>

           
//             {user.role === 'admin' && (
//               <>
//                 // <li><Link href="/admin">Admin</Link></li>
//                 // <li><Link href="/admin/des">Create Themes</Link></li>
//                 // <li><Link href="/admin/dashboard">Admin Dashboard</Link></li>
//               </>
//             )}
//             <li><button onClick={handleSignOut}>Sign Out</button></li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;



"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import jwtDecode from 'jwt-decode';
import styles from '../../styles/Navbar.module.css';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      setUser(decoded);
      setUserId(decoded.userId);
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">MyApp</Link>
      </div>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
      <ul className={`${styles.navItems} ${menuOpen ? styles.active : ''}`}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/register">Register</Link></li>
        <li><Link href="/login">Login</Link></li> 
        <li><Link href="/kyc">Kyc</Link></li> 
        <li><Link href="/support">Support</Link></li>     
        <li><Link href="/contactUs">Contact Us</Link></li>
        <Link href={`/kyc/${userId}`}>Kyc with ID</Link>
        {user && (
          <>
            <li><Link href="/user/profile">View Profile</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>

            {user.role === 'admin' && (
              <>
                {/* <li><Link href="/admin">Admin</Link></li> */}
                {/* <li><Link href="/admin/des">Create Themes</Link></li> */}
                {/* <li><Link href="/admin/dashboard">Admin Dashboard</Link></li> */}
              </>
            )}
            <li><button onClick={handleSignOut}>Sign Out</button></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
