class DataApi {
  constructor(rawData) {
    this.rawData = rawData;
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

  getArticles() {
    return this.mapIntoObjects(this.rawData.articles);
  }

  getAuthors() {
    return this.mapIntoObjects(this.rawData.authors);
  }
}

export default DataApi;