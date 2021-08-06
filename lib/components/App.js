import React, { Component } from 'react';

import ArticleList from './ArticleList';

export default class App extends Component {

  // Initial state to avoid render errors
  state = {
    articles: this.props.initialData.articles,
    authors: this.props.initialData.authors
  };

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
