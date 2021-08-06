import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';

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

  render() {
    return (
      <div>
        <ArticleList
          articles={this.state.articles}
        />
      </div>
    );
  }
}
