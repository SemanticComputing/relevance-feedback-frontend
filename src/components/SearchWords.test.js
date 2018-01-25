import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import SearchWords from './SearchWords';

const removeWord = jest.fn();
const words = [
  'innovation',
  'technology',
  'something',
  'trash'
];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchWords removeWord={removeWord} words={words} />, div);
});

it('renders the search words', () => {
  const tree = renderer
    .create(<SearchWords removeWord={removeWord} words={words} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('calls removeWord when a word is clicked', () => {
  const resultElem = mount(<SearchWords removeWord={removeWord} words={words} />);
  const buttons = resultElem.children({ name: 'remove' });

  expect(buttons.length).toBe(4);

  buttons.at(0).simulate('click');

  expect(removeWord.mock.calls.length).toBe(1);
  expect(removeWord.mock.calls[0][0]).toEqual('innovation');

  buttons.at(2).simulate('click');

  expect(removeWord.mock.calls.length).toBe(2);
  expect(removeWord.mock.calls[1][0]).toEqual('something');
});
