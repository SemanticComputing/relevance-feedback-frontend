import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import * as reactstrap from 'reactstrap';
import Topics from './Topics';

const describeTopic = jest.fn();

const result = {
  name: 'title',
  url: 'http://example.fi',
  description: 'description',
  topic: [0.2, 0.1489, 0.1, 0.01]
};

describe('Topics', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    ReactDOM.render(<Topics describeTopic={describeTopic} result={result} currentTopic={{}} />, div);
    document.body.removeChild(div);
  });

  it('renders topics', () => {
    // Mock the Popover as it requires the DOM and is not relevant here.
    reactstrap.Popover = jest.fn(() => null); // eslint-disable-line import/namespace

    const tree = renderer
      .create(<Topics describeTopic={describeTopic} result={result} currentTopic={{}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
