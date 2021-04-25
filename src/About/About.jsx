import React, { useState } from "react";
import styles from './About.module.css';
import Form from "../Form/Form";
import NavBar from "../NavBar/NavBar.jsx";

const About = (props) => {
    return (
        <div className={styles.container}>
            <NavBar/>
            <div className={styles.logo}>
                <a>About BlockNews</a>
            </div>
            <div className={styles.text}>
                <a>BlockNews is a blockchain news website designed by Penghao Liang.</a>
            </div>
        </div>
    )
}

export default About