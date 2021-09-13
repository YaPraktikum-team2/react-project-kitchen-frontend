import ArticlePreview from './ArticlePreview';
import ListPagination from './ListPagination';
import React from 'react';
import * as fakeData from './../data/articles.json'

const ArticleList = props => {

    //  DEMO
    if (!props.articles && fakeData) {
      props = fakeData;
    }

  if (!props.articles) {
    return (
      <div className="article-preview">Loading...</div>
    );
  }

  if (props.articles.length === 0) {
    return (
      <div className="article-preview">
        No articles are here... yet.
      </div>
    );
  }

  return (
    <div>
      {
        props.articles.map(article => {
          return (
            <ArticlePreview article={article} key={article.slug} />
          );
        })
      }

      <ListPagination
        pager={props.pager}
        articlesCount={props.articlesCount}
        currentPage={props.currentPage} />
    </div>
  );
};

export default ArticleList;
