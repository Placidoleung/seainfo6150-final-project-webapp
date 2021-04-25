import React, { useState } from "react";
import styles from './Contact.module.css';
import Form from "../Form/Form";
import NavBar from "../NavBar/NavBar.jsx";

const Contact = (props) => {
    return (
        <div className={styles.container}>
            <NavBar/>
            <div className={styles.logo}>
                <a>Contact BlockNews</a>
            </div>
            <div className={styles.form}>
                <Form />
            </div>
        </div>
    )
}

export default Contact
