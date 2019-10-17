import React from 'react';
import Form from './Form';
import { shallow } from 'enzyme';

describe('Form', () => {
  let wrapper
  const makeReservation = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Form makeReservation={makeReservation} />);
  });

  it('Should change respective states when user types on inputs', () => {

    const mockNameEvent = { target: { name: 'name', value: 'Charli' } };
    const mockDateEvent = { target: { name: 'date', value: '10/23' } };
    const mockTimeEvent = { target: { name: 'time', value: '12:00 PM' } };
    const mockNumberEvent = { target: { name: 'number', value: '3' } };

    const expectedName = 'Charli';
    const expectedDate = '10/23';
    const expectedTime = '12:00 PM';
    const expectedNumberEvent = '3';

    wrapper.instance().handleChange(mockNameEvent);
    wrapper.instance().handleChange(mockDateEvent);
    wrapper.instance().handleChange(mockTimeEvent);
    wrapper.instance().handleChange(mockNumberEvent);

    expect(wrapper.state('name')).toEqual(expectedName);
    expect(wrapper.state('date')).toEqual(expectedDate);
    expect(wrapper.state('time')).toEqual(expectedTime);
    expect(wrapper.state('number')).toEqual(expectedNumberEvent);
  });

  it('should invoke handleClick method onClick', () => {
    const mockEvent = { preventDefault() { } }
    wrapper.find('button').simulate('click', mockEvent);
    expect(makeReservation).toHaveBeenCalled()
  });
})