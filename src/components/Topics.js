import React from 'react';
import { func, object } from 'prop-types';
import { map, reject, sortBy, reverse } from 'lodash';
import TopicPopover from './TopicPopover';

const Topics = ({ result, describeTopic, currentTopic }) => {

  // Based on https://stackoverflow.com/a/8134122/4321262
  const getTopicColor = (topic) =>
    `#${Math.floor((Math.abs(Math.sin(topic) * 16777215)) % 16777215).toString(16).padStart(6, 0)}`;

  const getSize = (topic) => Math.min(24, Math.max(5, topic * 30));

  // Sort topics by "size" (i.e. relevance)
  const sortedTopics = reverse(sortBy(
    reject(map(result.topic, (topic, index) => ({ topic, index, size: getSize(topic) })),
      (topic) => topic.topic < 0.05),
    'size'));

  const isSelected = (topic) => (
    currentTopic.result === result.url && currentTopic.topic === topic
  );

  let x = '50%';
  let y = 0;
  let prevSize = 0;

  const circles = map(sortedTopics, ({ index, size }) => {
    y += size + prevSize + 4;
    prevSize = size;

    const selected = isSelected(index);
    const color = getTopicColor(index);

    const cid = `${result.url}-${index}`;

    return (
      <g key={index}>
        <circle id={cid}
          onMouseOver={() => describeTopic({ result: result.url, topic: index })}
          onMouseLeave={() => describeTopic({})}
          cx={x} cy={y} r={size} fill={color} stroke={selected ? 'black' : color}
          strokeWidth="2" />
        <TopicPopover topic={currentTopic} target={cid}
          isOpen={selected} />
      </g>
    );
  });

  return (
    <svg width="50">
      {circles}
    </svg>
  );
};

Topics.propTypes = {
  result: object.isRequired,
  describeTopic: func.isRequired,
  currentTopic: object.isRequired
};

export default Topics;
