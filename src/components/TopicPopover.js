import React from 'react';
import { bool, object, string } from 'prop-types';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import TopicWords from './TopicWords';

const TopicPopover = ({ isOpen, topic, target }) => {

  return (
    <Popover isOpen={isOpen} target={`[id="${target}"]`} placement={'right'}>
      <PopoverHeader>Topiikki {topic.topic}</PopoverHeader>
      <PopoverBody>
        <TopicWords topic={topic.topicWords} />
      </PopoverBody>
    </Popover>
  );
};

TopicPopover.propTypes = {
  isOpen: bool,
  topic: object.isRequired,
  target: string.isRequired
};

export default TopicPopover;
