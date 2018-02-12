import React from 'react';
import { connect } from 'react-redux';
import Results from '../components/Results';
import SearchForm from '../components/SearchForm';
import SearchWords from '../components/SearchWords';
import TopicWords from '../components/TopicWords';
import { updateQuery, updateThumb, doSearch, removeWord, describeTopic } from '../actions';
import { object, func } from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

let InnovationSearch = ({ updateQuery, doSearch, updateThumb, removeWord, describeTopic, search, results }) => {

  return (
    <Container>
      <Row>
        <Col>
          <SearchForm doSearch={doSearch} search={search} updateQuery={updateQuery} />
        </Col>
      </Row>
      {results.count ? (
        <Row>
          <Col>{results.count} tulosta</Col>
        </Row>
      ) : ''}
      <Row>
        <Col className="col-sm-12">
          {search.status}
        </Col>
      </Row>
      <Row>
        <Col className="col-sm-12">
          <SearchWords words={search.searchWords} bannedWords={search.bannedWords} removeWord={removeWord} />
        </Col>
      </Row>
      <Row>
        <Col className="col-sm-10">
          <Results results={results} updateThumb={updateThumb} describeTopic={describeTopic} />
        </Col>
        <Col className="col-sm-2">
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  search: state.search,
  results: state.results,
});

const mapDispatchToProps = ({
  updateQuery,
  doSearch,
  removeWord,
  updateThumb,
  describeTopic
});

InnovationSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(InnovationSearch);

InnovationSearch.propTypes = {
  search: object,
  results: object,
  updateQuery: func,
  updateThumb: func,
  removeWord: func,
  doSearch: func,
  describeTopic: func
};

export default InnovationSearch;
