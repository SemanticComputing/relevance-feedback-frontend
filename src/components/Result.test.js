import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Result from './Result';

const updateThumb = jest.fn();
const describeTopic = jest.fn();
const result = {
  name: 'title',
  url: 'http://example.fi',
  description: 'description'
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Result currentTopic={{}} describeTopic={describeTopic} updateThumb={updateThumb} result={result} />, div);
});

it('renders a result', () => {
  const tree = renderer
    .create(<Result currentTopic={{}} describeTopic={describeTopic} updateThumb={updateThumb} result={result} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('indicates a thumb up', () => {
  const thumbResult = Object.assign({}, result, { thumb: true });
  const tree = renderer
    .create(<Result currentTopic={{}} describeTopic={describeTopic} updateThumb={updateThumb} result={thumbResult} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('indicates a thumb down', () => {
  const thumbResult = Object.assign({}, result, { thumb: false });
  const tree = renderer
    .create(<Result currentTopic={{}} describeTopic={describeTopic} updateThumb={updateThumb} result={thumbResult} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('calls updateThumb when a thumb is clicked', () => {
  const resultElem = mount(<Result currentTopic={{}} describeTopic={describeTopic} updateThumb={updateThumb} result={result} />);
  resultElem.find({ name: 'thumbs-up' }).simulate('click');

  expect(updateThumb.mock.calls.length).toBe(1);
  expect(updateThumb.mock.calls[0][0]).toEqual({ result, value: true });

  resultElem.find({ name: 'thumbs-down' }).simulate('click');

  expect(updateThumb.mock.calls.length).toBe(2);
  expect(updateThumb.mock.calls[1][0]).toEqual({ result, value: false });
});
