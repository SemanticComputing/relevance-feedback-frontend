import React from 'react';
import { object, func } from 'prop-types';
import { Row, Col, Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

const Result = ({ result, thumb, updateThumb }) => {
  const handleThumbsUp = () => updateThumb({ url: result.url, value: true });
  const handleThumbsDown = () => updateThumb({ url: result.url, value: false });
  let thumbsUpStyle = {};
  let thumbsDownStyle = {};
  if (thumb) {
    if (thumb.value) {
      thumbsUpStyle.color = 'green';
    } else {
      thumbsDownStyle.color = 'red';
    }
  }
  return (
    <Row>
      <Col className="col-sm-8">
        <Row>
          <Col><a href={result.url}>{result.name}</a></Col>
        </Row>
        <Row>
          <Col>{result.description}</Col>
        </Row>
      </Col>
      <Col className="col-sm-2">
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
  thumb: object,
  updateThumb: func
};

export default Result;
