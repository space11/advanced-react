import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pickBy from 'lodash.pickby';

import ArticleList from './ArticleList';
import SearchBar from './SearchBar';

export default class App extends Component {
  // Define context type
  static childContextTypes = {
    store: PropTypes.object
  };

  getChildContext() {
    return {
      store: this.props.store
    };
  }

  // Initial state to avoid render errors
  state = this.props.store.getState();

  setSearchTerm = (searchTerm) => {
    this.setState({ searchTerm });
  };

  render() {
    let { articles, searchTerm } = this.state;
    if (searchTerm) {
      articles = pickBy(articles, (value) => {
        return value.title.match(searchTerm)
          || value.body.match(searchTerm);
      });
    }
    return (
      <>
        <SearchBar doSearch={this.setSearchTerm} />
        <ArticleList
          articles={articles}
        />
      </>
    );
  }
}
