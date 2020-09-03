import React from 'react';
import { shallow } from 'enzyme';
import Card from '../src/components/Card.jsx';
const data = require('../data.json');

let wrapper = shallow(<Card user={data[0]}></Card>);

describe("Card", ()=> {
	it('should render without crashing', ()=>{
		expect(wrapper).toMatchSnapshot();
	});

	it('renders the user title', ()=>{
		expect(wrapper.find('.user_title').text()).toEqual(`${data[0]['login']}`);
	});
});

