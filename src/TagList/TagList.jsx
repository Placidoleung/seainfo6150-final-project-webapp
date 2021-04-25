import React from 'react'
import styles from './TagList.module.css'

const TagList = (props) => {

    return(

        <div className={styles.container}>
            <h3>Tags</h3>

            <div className={styles.list}>
                {props.tags.map(tag => (
                    <div className={styles.tag} key={tag}><a href={'/tags/'+tag}>{tag}</a></div>
                ))}
            </div>

        </div>

    );

}

export default TagList;