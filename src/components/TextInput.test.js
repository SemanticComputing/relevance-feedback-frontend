import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import TextInput from './TextInput';

const onChange = jest.fn();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TextInput onChange={onChange} value={'text'} placeholder={'placeholder'} />, div);
});

it('displays the given value', () => {
  const tree = renderer
    .create(<TextInput onChange={onChange} value={'text'} placeholder={'placeholder'} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('calls onChange on input change', () => {
  const input = mount(<TextInput onChange={onChange} value={'text'} placeholder={'placeholder'} />);

  input.find('input').simulate('change', { target: { value: 'changed' } });

  expect(onChange.mock.calls.length).toBe(1);
  expect(onChange.mock.calls[0][0]).toEqual('changed');
});
