class StateApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObjects(rawData.articles),
      authors: this.mapIntoObjects(rawData.authors),
      searchTerm: '',
      timestamp: new Date()
    };

    this.subscriptions = {};
    this.lastSubscriptionId = 1;
  }

  subscribe = (callBack) => {
    this.lastSubscriptionId++;
    this.subscriptions[this.lastSubscriptionId] = callBack;
    return this.lastSubscriptionId;
  };

  unsubscribe = (subscriptionId) => {
    delete this.subscriptions[subscriptionId];
  };

  /**
   * Maps Array into Object, where Id is used as a key
   */
  mapIntoObjects(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  getState = () => {
    return this.data;
  };
  notifySubscribers = () => {
    Object.values(this.subscriptions).forEach((cb) => cb());
  };

  mergeWithState = (stateChange) => {
    this.data = {
      ...this.data,
      ...stateChange
    };

    this.notifySubscribers();
  };

  lookUpAuthor = (authorId) => {
    return this.data.authors[authorId];
  };

  setSearchTerm = (searchTerm) => {
    this.mergeWithState({ searchTerm });
  };

  startClock = () => {
    setInterval(() => {
      this.mergeWithState({ timestamp: new Date() });
    }, 1000);
  };
}

export default StateApi;