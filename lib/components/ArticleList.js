import React from 'react';

import Article from './Article';

export default function ArticleList(props) {
  return (
    <div>
      {Object.values(props.articles).map(article => (
        <Article
          key={article.id}
          article={article}
        />))}
    </div>
  );
}
