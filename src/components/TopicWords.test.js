import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import TopicWords from './TopicWords';

const topic = [
  ['word', 0.2],
  ['something', 0.1489],
  ['innovation', 0.1],
  ['trash', 0.01],
];

describe('TopicWords', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TopicWords topic={topic} />, div);
  });

  it('displays topic words', () => {
    const tree = renderer
      .create(<TopicWords topic={topic} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
