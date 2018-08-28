import React from 'react';
import './SearchWords.css';
import { array, func } from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { Button } from 'reactstrap';
import { map, flatten, uniq, includes } from 'lodash';

const SearchWords = ({ words, bannedWords, removeWord }) => {

  const getColor = (word) => includes(bannedWords, word) ? 'danger' : 'secondary';

  return map(uniq(flatten(words)), (word) => (
    <Button className="remove" color={getColor(word)} name="remove" key={word} onClick={() => removeWord(word)}>{word.replace(/"/g, '')}
      {' '}<FontAwesome name="times-circle" />
    </Button>
  ));
};

SearchWords.propTypes = {
  words: array,
  bannedWords: array,
  removeWord: func
};

export default SearchWords;
