import React from 'react';
import ArticleList from '../ArticleList';
import PropTypes from 'prop-types';

import renderer from 'react-test-renderer';
import { expect } from '@jest/globals';

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: { id: 'a', date: '', title: '', body: '' },
      b: { id: 'b', date: '', title: '', body: '' },
    },
    store: { lookUpAuthor: jest.fn(() => ({})) }
  };

  it('renders correctly', () => {
    const tree = renderer.create(
      <PassContext value={{ store: testProps.store }}>
        <ArticleList
          {...testProps}
        />
      </PassContext>
    ).toJSON();

    expect(tree.children.length).toBe(2);
    expect(tree).toMatchSnapshot();
  });
});

class PassContext extends React.Component {
  static childContextTypes = {
    store: PropTypes.object,
  };

  getChildContext() {
    return this.props.value;
  }

  render() {
    return this.props.children;
  }
}
