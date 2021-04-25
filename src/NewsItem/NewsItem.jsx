import React from "react";
import styles from "./NewsItem.module.css"
import { Link } from "react-router-dom";

const NewsItem = (props) => {

    return(

        <div className={styles.container}>
            <header className={styles.header}>
                <h2 className={styles.title}>
                    <Link
                    className={styles.link}
                    to={`/news/${props.article.id}`}
                    >
                    {props.article.title}
                    </Link>
                </h2>
                <p className={styles.text}>{props.article.author} {props.article.time}</p>
                <p className={styles.text}>{props.article.shortText}</p>
            </header>
            <div className={styles.imgContainer}>
                <img className={styles.img} src={props.article.img} alt={props.article.alt}/>
            </div>
            <hr></hr>
        </div>
        

    );

}

export default NewsItem;