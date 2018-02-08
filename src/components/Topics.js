import React from 'react';
import { array, func } from 'prop-types';
import { map } from 'lodash';

const Topics = ({ topics, describeTopic }) => {

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

  let x = 30;
  let y = 0;
  let prevSize = 0;

  const circles = map(topics, (topic, index) => {
    const size = getSize(topic);
    y += size + prevSize + 2;
    prevSize = size;
    return <circle key={index} cx={x} cy={y} r={size} fill={topicColors[index]}
      onMouseOver={() => describeTopic(index)}
    />;
  });

  return (
    <svg height="100" width="100">
      {circles}
    </svg>
  );
};

Topics.propTypes = {
  topics: array,
  describeTopic: func
};

export default Topics;
