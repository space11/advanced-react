import React, { Component } from 'react';

import ArticleList from './ArticleList';

import DataApi from '../DataApi';
import { data } from '../testData';

const api = new DataApi(data);

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors(),
    };
  }
  // Action: defined in a parent component, but executed in child component
  articleActions = {
    lookUpAuthor: authorId => this.state.authors[authorId]
  };

  render() {
    return (
      <div>
        <ArticleList
          articles={this.state.articles}
          articleActions={this.articleActions}
        />
      </div>
    );
  }
}