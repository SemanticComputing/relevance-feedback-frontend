import React from 'react';
import { connect } from 'react-redux';
import Results from '../components/Results';
import SearchForm from '../components/SearchForm';
import SearchWords from '../components/SearchWords';
import { updateQuery, updateSearchType, updateThumb, doSearch, removeWord, describeTopic } from '../actions';
import { object, func } from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import { toLower, replace } from 'lodash';

let InnovationSearch = ({
  updateQuery, updateSearchType, doSearch, updateThumb, removeWord, describeTopic, search, results
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <SearchForm doSearch={doSearch} search={search} updateQuery={updateQuery}
            updateSearchType={updateSearchType} />
        </Col>
      </Row>
      {results.count ? (
        <Row>
          <Col>{results.count} tulosta</Col>
        </Row>
      ) : ''}
      <Row>
        <Col className={['search-status', replace(toLower(search.status), ' ', '-')].join(' ')}>
          {search.status}
        </Col>
      </Row>
      <Row>
        <Col>
          <SearchWords words={search.searchWords} bannedWords={search.bannedWords} removeWord={removeWord} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Results results={results} updateThumb={updateThumb} describeTopic={describeTopic} />
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
  updateSearchType,
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
  updateSearchType: func,
  updateThumb: func,
  removeWord: func,
  doSearch: func,
  describeTopic: func
};

export default InnovationSearch;
