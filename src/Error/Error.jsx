import React from 'react'
import NavBar from "../NavBar/NavBar.jsx";
import styles from './Error.module.css';


const Error = () => {
    return (
        <div className={styles.base}>
            <NavBar></NavBar>
            <div className={styles.container}>
                <h1 className={styles.warn}>
                    Oops...That page couldn't be found.
                </h1>
                <a className={styles.back} href="/">Go back to home page?</a>
            </div>
        </div>
    )
}

export default Error
