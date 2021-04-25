import React from 'react'
import styles from './NavBar.module.css'

const NavBar = () => {

    return(
        <div className="container">
            <div className={styles.logo}>
                <a href="/">BlockNews</a>
            </div>
            <ul className={styles.nav}>
                <li className={styles.item}><a href="/">Home</a></li>
                <li className={styles.item}><a href="/contact">Contact</a></li>
                <li className={styles.item}><a href="/about">About</a></li>
            </ul>
        </div>

    );

}

export default NavBar;