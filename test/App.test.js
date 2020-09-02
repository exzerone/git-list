import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App.jsx';

let wrapper = shallow(<App/>);

describe('App', ()=>{
	it("should render without crashing", ()=>{
		expect(wrapper).toMatchSnapshot();
	});

	it('should render title of the site correctly', ()=>{
		expect(wrapper.find('.title').text()).toEqual('Github Users List')
	});
});