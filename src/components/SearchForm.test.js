import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import SearchForm from './SearchForm';

const search = { query: 'query' };

it('renders without crashing', () => {
  const doSearch = jest.fn();
  const updateQuery = jest.fn();

  const div = document.createElement('div');
  ReactDOM.render(<SearchForm doSearch={doSearch} updateQuery={updateQuery} search={search} />, div);
});

it('displays the query', () => {
  const doSearch = jest.fn();
  const updateQuery = jest.fn();

  const tree = renderer
    .create(<SearchForm doSearch={doSearch} updateQuery={updateQuery} search={search} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('calls doSearch on form submit', () => {
  const doSearch = jest.fn();
  const updateQuery = jest.fn();

  const form = mount(<SearchForm doSearch={doSearch} updateQuery={updateQuery} search={search} />);

  form.find('form').simulate('submit');

  expect(doSearch.mock.calls.length).toBe(1);
  expect(doSearch.mock.calls[0][0]).toEqual(search);
});

it('calls updateQuery when on input change', () => {
  const updateQuery = jest.fn();
  const doSearch = jest.fn();

  const form = mount(<SearchForm doSearch={doSearch} updateQuery={updateQuery} search={search} />);

  form.find('input').simulate('change', { target: { value: 'changed' } });

  expect(updateQuery.mock.calls.length).toBe(1);
  expect(updateQuery.mock.calls[0][0]).toEqual('changed');
  expect(doSearch.mock.calls.length).toBe(0);
});
