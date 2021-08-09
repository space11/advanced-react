class StateApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObjects(rawData.articles),
      authors: this.mapIntoObjects(rawData.authors),
      searchTerm: ''
    };
  }

  /**
   * Maps Array into Object, where Id is used as a key
   */
  mapIntoObjects(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  lookUpAuthor = (authorId) => {
    return this.data.authors[authorId];
  };

  getState = () => {
    return this.data;
  };
}

export default StateApi;