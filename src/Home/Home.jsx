import React from 'react'
import Form from "../Form/Form";
import treefrog from "../images/treefrog.jpg";
import styles from "./Home.module.css"
import NewsItem from "../NewsItem/NewsItem.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import TagList from "../TagList/TagList.jsx";

const Home = (props) => {
    let displayContent;
    let tagList = [];

    if (props.news.length) {
        displayContent = (
        <div className={styles.container}>
            {props.news.map((article) => (
            <NewsItem article={article} id={article.id} key={article.id}/>
            ))}
        </div>
        );
        let tagSet = new Set();
        props.news.map((article) => (
            tagSet.add(article.tag)
        ))
        for(var t of tagSet) {
            tagList.push(t);
        }

    } else {
        displayContent = <div>You have no data!</div>;
    }
    return (
        <div className={styles.container}>
            <NavBar/>
            <div className={styles.content}>
                <div className={styles.newsList}>
                    {displayContent}
                </div>
                <div className={styles.tagList}>
                    <TagList tags={tagList}/>
                </div>
            </div>
        </div>
    )
}

export default Home
