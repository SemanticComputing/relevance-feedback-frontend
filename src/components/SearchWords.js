import React from 'react';
import { string, func } from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { Button } from 'reactstrap';
import { map } from 'lodash';

const SearchWords = ({ words, removeWord }) => {
  words = words ? words.split(' OR ') : null;
  return map(words, (word) => (
    <Button key={word} onClick={removeWord}>{word}<FontAwesome className="times-circle" name="remove" /></Button>
  ));
};

SearchWords.propTypes = {
  words: string,
  removeWord: func
};

export default SearchWords;
