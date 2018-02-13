import React from 'react';
import { array } from 'prop-types';
import { map } from 'lodash';

const TopicWords = ({ topic }) => {

  const getSize = (word) => word[1] * 1300;

  const words = map(topic, (word) => (
    <span key={word[0]} style={{ fontSize: getSize(word) }}>
      {word[0]}{' '}
    </span>
  ));

  return (
    <div>
      {words}
    </div>
  );
};

TopicWords.propTypes = {
  topic: array
};

export default TopicWords;
