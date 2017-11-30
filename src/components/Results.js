import React from 'react';
import { array } from 'prop-types';
import { map } from 'lodash';
import Result from '../components/Result';

const Results = ({ results, thumbs, updateThumb }) => {
  return map(results, (result) => (
    <Result key={result.url} result={result} thumb={thumbs[result.url]} updateThumb={updateThumb} />
  ));
};

Results.propTypes = {
  results: array
};

export default Results;
