import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  it('Should match the snapshot', () => {
    const cancelReservation = jest.fn();
    const wrapper = shallow(
      <Card
        key={1}
        id={1}
        name={'Charli'}
        date={'10/23'}
        time={'12:00 PM'}
        number={'2'}
        cancelReservation={cancelReservation}
      />
    );

    expect(wrapper).toMatchSnapshot();
  })
})