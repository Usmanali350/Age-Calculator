import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand">Logo</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
            <motion.ul className="navbar-nav">
              {/* Animating the Navbar Links */}
              <motion.li className="nav-item" whileHover={{ scale: 1.1, color: "#FFD700" }} transition={{ duration: 0.3 }}>
                <Link className="nav-link me-5" to="/">Home</Link>
              </motion.li>
              <motion.li className="nav-item" whileHover={{ scale: 1.1, color: "#FFD700" }} transition={{ duration: 0.3 }}>
                <Link className="nav-link me-5" to="About">About</Link>
              </motion.li>
              <motion.li className="nav-item" whileHover={{ scale: 1.1, color: "#FFD700" }} transition={{ duration: 0.3 }}>
                <Link className="nav-link me-5" to="Contact">Contact</Link>
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
