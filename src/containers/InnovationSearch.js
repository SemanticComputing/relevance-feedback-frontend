import React from 'react';
import { connect } from 'react-redux';
import TextInput from '../components/TextInput';
import Results from '../components/Results';
import { updateQuery, updateThumb, doSearch } from '../actions';
import { object, func } from 'prop-types';
import { Container, Row, Col, Form, FormGroup, Label, Button } from 'reactstrap';

let InnovationSearch = ({ updateQuery, doSearch, updateThumb, search}) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    return doSearch(search);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for='search'>Haku</Label>
              <TextInput id='search' value={search.query} placeholder='Haku' onChange={(query) => updateQuery({ query })} />
            </FormGroup>
            <FormGroup>
              <Button type="submit">Hae</Button>
            </FormGroup>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col className="col-sm-12">
          {search.status}
        </Col>
      </Row>
      <Results results={search.results.items} thumbs={search.thumbs} updateThumb={updateThumb} />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  search: state.search,
});

const mapDispatchToProps = ({
  updateQuery,
  doSearch,
  updateThumb
});

InnovationSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(InnovationSearch);

InnovationSearch.propTypes = {
  search: object,
  updateQuery: func,
  updateThumb: func,
  doSearch: func,
};

export default InnovationSearch;
