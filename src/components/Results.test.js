import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Results from './Results';

const updateThumb = jest.fn();
const results = [
  {
    name: 'title',
    url: 'http://example.fi',
    description: 'description'
  },
  {
    name: 'other title',
    url: 'http://another.fi',
    description: 'other description'
  },
];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Results updateThumb={updateThumb} result={results} />, div);
});

it('renders results', () => {
  const tree = renderer
    .create(<Results updateThumb={updateThumb} results={results} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
