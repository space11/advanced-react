import React, { Component } from 'react';

import ArticleList from './ArticleList';

export default class App extends Component {

  // Initial state to avoid render errors
  state = this.props.store.getState();


  render() {
    return (
      <div>
        <ArticleList
          articles={this.state.articles}
          store={this.props.store}
        />
      </div>
    );
  }
}
