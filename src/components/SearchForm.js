import React from 'react';
import './SearchForm.css';
import TextInput from '../components/TextInput';
import { object, func } from 'prop-types';
import { Form, FormGroup, Input, InputGroup, Label, Button } from 'reactstrap';

const SearchForm = ({ updateQuery, updateSearchType, doSearch, search }) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    return doSearch(search);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Label hidden for='search'>Haku</Label>
        <TextInput id='search' disabled={search.status} value={search.query} placeholder='Haku' onChange={updateQuery} />
        <Button disabled={search.disabled} type="submit"
        className={!search.disabled ? 'activeButton' : 'disabledButton'}>Hae</Button>
      </InputGroup>
      <FormGroup>
        <FormGroup check inline>
          <Label check>
            <Input type="radio" name="search-type" defaultChecked={search.type === 'news'} onClick={() => updateSearchType('news')} />{' '}
            Yle-uutiset
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Label check>
            <Input type="radio" name="search-type" defaultChecked={search.type === 'net'} onClick={() => updateSearchType('net')} />{' '}
            Google
          </Label>
        </FormGroup>
      </FormGroup>
    </Form>
  );
};

SearchForm.propTypes = {
  search: object,
  updateQuery: func,
  updateSearchType: func,
  doSearch: func,
};

export default SearchForm;
