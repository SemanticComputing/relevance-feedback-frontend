import React from 'react';
import { map } from 'lodash';
import { bool, object, string } from 'prop-types';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';

const TopicPopover = ({ isOpen, topic, target }) => {

  const getSize = (word) => word[1] * 1500;

  const body = map(topic.topicWords, (word) => (
    <span key={word[0]} style={{ fontSize: getSize(word) }}>
      {word[0]}{' '}
    </span>
  ));
  return (
    <Popover isOpen={isOpen} target={'[id="' + target + '"]'}>
      <PopoverBody>{body}</PopoverBody>
    </Popover>
  );
};

TopicPopover.propTypes = {
  isOpen: bool,
  topic: object,
  target: string
};

export default TopicPopover;
