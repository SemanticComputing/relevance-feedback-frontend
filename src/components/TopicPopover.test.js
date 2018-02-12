import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import TopicPopover from './TopicPopover';
import * as reactstrap from 'reactstrap';

const topic = {
  topicWords: [
    ['word', 0.2],
    ['something', 0.1489],
    ['innovation', 0.1],
    ['trash', 0.01]
  ],
  topic: 0
};

const target = 'http://example.net';

// These tests are perhaps not great as Popover is mocked due to difficulties
// in getting it to render in a test environment.

// Make Popover return its child components
const popoverMock = jest.fn((stuff) => stuff.children);
reactstrap.Popover = popoverMock;  // eslint-disable-line import/namespace

describe('TopicPopover', () => {

  beforeEach(() => {
    popoverMock.mockClear();
  });

  it('renders without crashing', () => {
    const isOpen = true;

    const div = document.createElement('div');
    div.setAttribute('id', target);
    document.body.appendChild(div);
    ReactDOM.render(<TopicPopover target={target} isOpen={isOpen} topic={topic} currentTopic={{}} />, div);
    document.body.removeChild(div);
  });

  it('renders a topic', () => {
    const isOpen = true;

    const tree = renderer
      .create(<TopicPopover target={target} isOpen={isOpen} topic={topic} currentTopic={{}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should pass isOpen to Popover', () => {
    mount(<TopicPopover target={target} isOpen={true} topic={topic} currentTopic={{}} />);

    expect(popoverMock.mock.calls.length).toBe(1);
    expect(popoverMock.mock.calls[0][0].isOpen).toBe(true);

    popoverMock.mockClear();

    mount(<TopicPopover target={target} isOpen={false} topic={topic} currentTopic={{}} />);

    expect(popoverMock.mock.calls.length).toBe(1);
    expect(popoverMock.mock.calls[0][0].isOpen).toBe(false);
  });
});
