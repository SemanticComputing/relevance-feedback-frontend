import React from 'react';
import { connect } from 'react-redux';
import Results from '../components/Results';
import SearchForm from '../components/SearchForm';
import SearchWords from '../components/SearchWords';
import { updateQuery, updateThumb, doSearch } from '../actions';
import { object, func } from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

let InnovationSearch = ({ updateQuery, doSearch, updateThumb, search }) => {

  return (
    <Container>
      <Row>
        <Col>
          <SearchForm doSearch={doSearch} search={search} updateQuery={updateQuery} />
        </Col>
      </Row>
      <Row>
        <Col className="col-sm-12">
          {search.status}
        </Col>
      </Row>
      <Row>
        <Col className="col-sm-12">
          <SearchWords words={search.searchWords} />
        </Col>
      </Row>
      <Results results={search.results.items} updateThumb={updateThumb} />
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
