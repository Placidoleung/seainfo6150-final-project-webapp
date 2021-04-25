import React from 'react';
import styles from './NewsDetail.module.css';
import HTMLText from "../HTMLText/HTMLText.jsx";
import NavBar from "../NavBar/NavBar.jsx";

const NewsDetail = (props) => {

    return(
        <div>
            <NavBar></NavBar>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>{props.article.title}</h1>
                    <h3 className={styles.shortText}>{props.article.shortText}</h3>
                    <img className={styles.img} src={props.article.img} alt={props.article.alt}/>
                </div>
                <HTMLText text={props.article.content} />
            </div>
            
        </div>
    );

}

export default NewsDetail;