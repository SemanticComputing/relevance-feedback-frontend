import React from 'react';
import { object, func } from 'prop-types';
import { Row, Col, Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import Topics from '../components/Topics';
import './Result.css';

const Result = ({ result, updateThumb, describeTopic }) => {

  const handleThumbsUp = () => updateThumb({ result, value: true });
  const handleThumbsDown = () => updateThumb({ result, value: false });

  let thumbsUpStyle = {};
  let thumbsDownStyle = {};
  if (result.thumb === true) {
    thumbsUpStyle.color = 'green';
  } else if (result.thumb === false) {
    thumbsDownStyle.color = 'red';
  }

  return (
    <Row className="result">
      <Col className="col-sm-1">
        <Topics topics={result.topic} describeTopic={describeTopic} />
      </Col>
      <Col className="col-sm-8">
        <Row>
          <Col><a href={result.url}>{result.name}</a></Col>
        </Row>
        <Row>
          <Col>{result.description}</Col>
        </Row>
      </Col>
      <Col className="col-sm-3">
        <Row>
          <Col><Button onClick={handleThumbsUp}><FontAwesome style={thumbsUpStyle} className="thumbs thumbs-up" size="2x" name="thumbs-up" /></Button></Col>
          <Col><Button onClick={handleThumbsDown}><FontAwesome style={thumbsDownStyle} className="thumbs thumbs-down" size="2x" name="thumbs-down" /></Button></Col>
        </Row>
      </Col>
    </Row>
  );
};

Result.propTypes = {
  result: object,
  updateThumb: func,
  describeTopic: func
};

export default Result;
