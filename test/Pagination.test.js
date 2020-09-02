import React from 'react';
import { shallow, mount } from 'enzyme';
import Pagination from '../src/components/Pagination.jsx';

const handleClick = jest.fn();
const wrapper = shallow(<Pagination totalPages={20} page={1} handleClick={handleClick}/>);

describe('Pagination', ()=>{
	
	describe('Next Page', () => {
    it('should have the next page button', () => {
			expect(wrapper.find('.nextPage').exists());
    });
	});

	describe('Previous Page', () => {
    it('should have the prev page button', () => {
			expect(wrapper.find('.prevPage').exists());
    });
	});

	describe('Page button', ()=>{
		it('should render 20 page buttons', ()=>{
			expect(wrapper.find('.page').length).toEqual(20);
		});
	});	

});