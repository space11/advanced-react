import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pickBy from 'lodash.pickby';

import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import Timestamp from './Timestamp';

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

  onStoreChange = () => {
    this.setState(this.props.store.getState());
  };

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }


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
        <Timestamp />
        <SearchBar doSearch={this.props.store.setSearchTerm} />
        <ArticleList
          articles={articles}
        />
      </>
    );
  }
}
