import React from 'react';
import { array, func, object } from 'prop-types';
import { map, reject, sortBy, reverse } from 'lodash';
import TopicPopover from './TopicPopover';

const Topics = ({ result, describeTopic, currentTopic }) => {

  const topicColors = [
    'green',
    'red',
    'yellow',
    'blue',
    'teal',
    'orange',
    'black',
    'purple',
    'fuchsia',
    'brown',
    'darkgrey',
    'olive',
    'burlywood',
  ];

  const getSize = (topic) => topic * 30;

  // Sort topics by "size" (i.e. relevance)
  const sortedTopics = reverse(sortBy(map(
    reject(result.topic, (topic) => topic < 0.1),
    (topic, index) => ({ topic, index, size: getSize(topic) })
  ), 'size'));

  const isSelected = (topic) => (
    currentTopic.result === result.url && currentTopic.topic === topic
  );

  let x = 30;
  let y = 0;
  let prevSize = 0;

  const circles = map(sortedTopics, ({ index, size }) => {
    y += size + prevSize + 2;
    prevSize = size;

    const selected = isSelected(index);
    const color = topicColors[index];

    return (
      <g key={index}>
        <circle id={result.url}
          onMouseOver={() => describeTopic({ result: result.url, topic: index })}
          onMouseLeave={() => describeTopic({})}
          cx={x} cy={y} r={size} fill={color} stroke={selected ? 'black' : color}
          strokeWidth="2" />
        <TopicPopover topic={currentTopic} target={result.url}
          isOpen={selected} />
      </g>
    );
  });

  return (
    <svg>
      {circles}
    </svg>
  );
};

Topics.propTypes = {
  result: object,
  describeTopic: func,
  currentTopic: object
};

export default Topics;
