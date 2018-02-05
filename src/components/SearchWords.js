import React from 'react';
import './SearchWords.css';
import { array, func } from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { Button } from 'reactstrap';
import { map, flatten } from 'lodash';

const SearchWords = ({ words, removeWord }) => {

  return map(flatten(words), (word) => (
    <Button className="remove" name="remove" key={word} onClick={() => removeWord(word)}>{word}
      {' '}<FontAwesome name="times-circle" />
    </Button>
  ));
};

SearchWords.propTypes = {
  words: array,
  removeWord: func
};

export default SearchWords;
