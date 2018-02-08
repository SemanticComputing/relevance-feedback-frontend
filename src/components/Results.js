import React from 'react';
import { array } from 'prop-types';
import { map } from 'lodash';
import Result from '../components/Result';

const Results = ({ results, updateThumb, describeTopic }) => {
  return map(results, (result) => (
    <Result key={result.url} result={result} updateThumb={updateThumb} describeTopic={describeTopic} />
  ));
};

Results.propTypes = {
  results: array
};

export default Results;
