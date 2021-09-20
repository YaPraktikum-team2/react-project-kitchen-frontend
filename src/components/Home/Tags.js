import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import agent from '../../agent';
import styles from './Tags.module.css';

const Tags = ({ tags, onClickTag, tagChecked }) => {
  return(
    <div className={styles.sidebar}>
      <h3 className={styles.title}>Популярные теги</h3>
      <ul className={`${styles.list}`}>
        {(tags && tags.length) ? (
          tags.map(tag => {
            const handleClick = ev => {
              ev.preventDefault();
              onClickTag(tag, page => agent.Articles.byTag(tag, page), agent.Articles.byTag(tag));
            };
            const customID = uuidv4();
            return (
              <li
                key={customID}
                className={tagChecked !== tag ? `${styles.item}` : `${styles.item} ${styles.item_active}`}
                data-content={tag}
              >
                <a
                  href="#"
                  className={styles.item_content}
                  onClick={handleClick}>
                  {tag}
                </a>
              </li>
            );
          })
        ) : (
          <div>Теги загружаются...</div>
        )}
      </ul>
    </div>
  )
};

export default Tags;
