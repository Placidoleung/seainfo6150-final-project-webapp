import React from 'react';
import NavBar from "../NavBar/NavBar";
import NewsItem from '../NewsItem/NewsItem';
import TagList from '../TagList/TagList';

import styles from './TagDetail.module.css';

const TagDetail = (props) => {
    let tagList = [];


    if (props.news.length) {
        
        let tagSet = new Set();
        props.news.map((article) => (
            tagSet.add(article.tag)
        ))
        for(var t of tagSet) {
            tagList.push(t);
        }

    }

    return(

        <div>
            <div>
                <NavBar />
            </div>
            <div className={styles.content}>
                <div>
                    <h1 className={styles.tag}>{props.tag}</h1>
                    {props.news
                        .filter(article => article.tag == props.tag)
                        .map(article => (
                        <NewsItem article={article} key={article.id}/>))
                    }
                </div>
                <div className={styles.tagList}>
                    <TagList tags={tagList}/>
                </div>
            </div>

        </div>

    );

}

export default TagDetail;