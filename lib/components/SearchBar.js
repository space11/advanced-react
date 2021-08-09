import React, { Component } from 'react';
import debounce from 'lodash.debounce';

export default class SearchBar extends Component {
  state = {
    searchTerm: ''
  };

  doSearch = debounce((searchTerm) => {
    // DeBounce locally doSearch function passed in props
    this.props.doSearch(searchTerm);
  }, 300);


  handleSearch = (event) => {
    const searchTerm = event.target.value;
    this.setState({ searchTerm },
      () => { this.doSearch(searchTerm); }
    );
  };

  render() {
    return (
      <input
        value={this.state.searchTerm}
        type="search"
        placeholder="Enter search term"
        onChange={this.handleSearch}
      />
    );
  }
}
