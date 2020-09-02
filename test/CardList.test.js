import React from 'react';
import { shallow } from 'enzyme';
import CardList from '../src/components/CardList.jsx';
const data = require('../data.json');

let wrapper = shallow(<CardList list={data}/>);

describe('CardList', () => {
	it('should render without crashing', ()=>{
		expect(wrapper).toMatchSnapshot();
	});

	it('should have total capacity of 30 cards', ()=>{
		expect(wrapper.children().length).toEqual(30);
	})
});
