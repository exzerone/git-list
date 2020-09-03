import React from 'react';
import { shallow } from 'enzyme';
import UserDetail from '../src/components/UserDetail.jsx';
var data = require('../data.json');

const mockCallBack = jest.fn();
const wrapper = shallow(<UserDetail handleClose={mockCallBack} user={data[0]}/>);

describe('UserDetail', () => {
	it('render without crashing', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('render clickable close button', ()=>{
		const button = wrapper.find('.close_button');
		button.simulate('click');
		expect(mockCallBack.mock.calls.length).toEqual(1);
	});
	
});
