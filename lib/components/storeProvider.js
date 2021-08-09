import React from 'react';
import PropTypes from 'prop-types';

/**
 * Generic HOC that wraps and connect to Context passed in Component
 */
const storeProvider = (extraProps = () => ({})) => (Component) => {
  return class extends React.PureComponent {
    static displayName = `${Component.name}Container`;
    static contextTypes = {
      store: PropTypes.object,
    };

    usedState = () => {
      return extraProps(this.context.store, this.props);
    };

    state = this.usedState();

    onStoreChange = () => {
      if (this.subscriptionId) {
        this.setState(this.usedState());
      }
    };
    componentDidMount() {
      this.subscriptionId = this.context.store.subscribe(this.onStoreChange);
    }
    componentWillUnmount() {
      this.context.store.unsubscribe(this.subscriptionId);
      this.subscriptionId = null;
    }
    render() {
      return <Component
        {...this.props}
        {...this.usedState()}
        store={this.context.store} />;
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