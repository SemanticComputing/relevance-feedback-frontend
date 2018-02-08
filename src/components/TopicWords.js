import React from 'react';
import { array } from 'prop-types';
import { map } from 'lodash';
import { Row, Col } from 'reactstrap';

const TopicWords = ({ topic }) => {

  const getSize = (word) => word[1] * 1000;

  const words = map(topic, (word) => (
    <Col key={word}>
      <span style={{ fontSize: getSize(word) }}>{word[0]}</span>
    </Col>
  ));

  return (
    <Row>
      {words}
    </Row>
  );
};

TopicWords.propTypes = {
  topic: array
};

export default TopicWords;
