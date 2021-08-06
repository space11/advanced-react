import React from 'react';
import PropTypes from 'prop-types';

/**
 * Generic HOC that wraps and connect to Context passed in Component
 */
const storeProvider = (Component) => {
  return class extends React.Component {
    static displayName = `${Component.name}Container`;

    static contextTypes = {
      store: PropTypes.object
    };

    render() {
      return <Component  {...this.props} store={this.context.store} />;
    }
  };

  // // Create a container component - functional version
  // // gets props, and destructuring store from context api
  // const WithStore = (props, { store }) => <Component  {...props} store={store} />;

  // WithStore.contextTypes = {
  //   store: PropTypes.object
  // };

  // WithStore.displayName = `${Component.name}Container`;
  // return WithStore;
};

export default storeProvider;