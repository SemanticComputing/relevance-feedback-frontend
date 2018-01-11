import React from 'react';
import TextInput from '../components/TextInput';
import { object, func } from 'prop-types';
import { Form, FormGroup, Label, Button } from 'reactstrap';

const SearchForm = ({ updateQuery, doSearch, search }) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    return doSearch(search);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for='search'>Haku</Label>
        <TextInput id='search' value={search.query} placeholder='Haku' onChange={updateQuery} />
      </FormGroup>
      <FormGroup>
        <Button disabled={search.disabled} type="submit">Hae</Button>
      </FormGroup>
    </Form>
  );
};

SearchForm.propTypes = {
  search: object,
  updateQuery: func,
  doSearch: func,
};

export default SearchForm;
