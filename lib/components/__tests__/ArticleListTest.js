import React from 'react';
import ArticleList from '../ArticleList';

import { expect } from '@jest/globals';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: { id: 'a', date: '', title: '', body: '' },
      b: { id: 'b', date: '', title: '', body: '' },
    },

  };

  it('renders correctly', () => {
    const wrapper = shallow(
      <ArticleList
        {...testProps}
      />
    );

    expect(wrapper.find('Article').length).toBe(2);
    expect(wrapper).toMatchSnapshot();
  });
});

