import React from 'react';
import styles from "./index.module.css";
import { Link } from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';

const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link to='/' className={styles.text}>Home</Link>
            <Link to='about' className={styles.text}>About</Link>
        </div>
    )
}

export default Navbar