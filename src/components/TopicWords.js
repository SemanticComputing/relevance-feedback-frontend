import React from 'react';
import { array } from 'prop-types';
import { map, min } from 'lodash';

const TopicWords = ({ topic }) => {

  const getSize = (word) => min([10 + word[1] * 1000, 55]);

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
