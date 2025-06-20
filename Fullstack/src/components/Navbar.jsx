// import React from 'react'
// import { Link } from 'react-router-dom'
// import './Navbar.css'
// const Navbar = () => {
//   return (
//     <div>
//       <nav className="navbar">
//         <ul>
//             <li>
//                 <Link to='/'>Home</Link>
//             </li>
//             <li>
//                 <Link to='/about'>About</Link>
//             </li>
//             <li>
//                 <Link to='/service'>Service</Link>
//             </li>
//         </ul>
//       </nav>
//     </div>
//   )
// }
// export default Navbar


import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    backgroundColor: '#333',
    padding: '1rem 0',
    textAlign: 'center',
    width: '100%',
    position: 'relative',
    top: 0,
    left: 0,
  };

  const ulStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.1rem',
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li>
          <Link to="/" style={linkStyle}>Home</Link>
        </li>
        <li>
          <Link to="/about" style={linkStyle}>About</Link>
        </li>
        <li>
          <Link to="/service" style={linkStyle}>Service</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;