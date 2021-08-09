import React from 'react';
import PropTypes from 'prop-types';

/**
 * Generic HOC that wraps and connect to Context passed in Component
 */
const storeProvider = (extraProps) => (Component) => {
  return class extends React.PureComponent {
    static displayName = `${Component.name}Container`;

    static contextTypes = {
      store: PropTypes.object
    };

    onStoreChange = () => {
      this.forceUpdate();
    };

    componentDidMount() {
      this.subscriptionId = this.context.store.subscribe(this.onStoreChange);
    }

    componentWillUnmount() {
      this.props.context.unsubscribe(this.subscriptionId);
    }


    render() {
      return <Component
        {...this.props}
        {...extraProps(this.context.store, this.props)}
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