import React from 'react';
import styled from 'styled-components';

const Page = styled.button`
	height: 40px;
	width: 40px;
	border-radius: 5px;
	cursor: pointer;
	border: 0.5px solid grey;
	&:hover{
		background-color: lightblue;
	}
`;

const PageRow = styled.div`
	margin: 25px 0;
`;

function Pagination ({totalPages, handleClick, page }){
	
	const pages = [...Array(totalPages).keys()].map(number => number + 1);

	const nextPage = function(){
		if (page + 1 <= totalPages){
			handleClick(page+1);
		}
	}

	const prevPage = function(){
		if (page - 1 >= 1){
			handleClick(page-1);
		}
	}

	return(
		<PageRow className="numbers">
			<Page onClick={prevPage} className="prevPage">{"<"}</Page>
			{pages.map(number => (
        <Page
          key={number}
          href="/#"
          onClick={() => handleClick(number)}
          className={`page ${page === number && 'active'}`}
        >
          {number}
        </Page>
      ))}
			<Page onClick={nextPage} className="nextPage">{">"}</Page>
    </PageRow>
	)
}

export default Pagination;