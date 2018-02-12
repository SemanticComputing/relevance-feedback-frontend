import React from 'react';
import { object, func } from 'prop-types';
import { map } from 'lodash';
import Result from '../components/Result';

const Results = ({ results, updateThumb, describeTopic }) => {
  return map(results.items, (result) => (
    <Result key={result.url} result={result} updateThumb={updateThumb}
      describeTopic={describeTopic} currentTopic={results.currentTopic} />
  ));
};

Results.propTypes = {
  results: object,
  updateThumb: func,
  describeTopic: func
};

export default Results;
