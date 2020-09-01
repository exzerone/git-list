import React from 'react';
import styled from 'styled-components';

function Pagination ({totalPages, handleClick, page }){
	
	const pages = [...Array(totalPages).keys()].map(number => number + 1);
	
	const Page = styled.button`
		height: 40px;
		width: 40px;
		cursor: pointer;
	`;

	const PageRow = styled.div`
		margin: 25px 0;
	`;

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
          className={`${page === number && 'active'}`}
        >
          {number}
        </Page>
      ))}
			<Page onClick={nextPage} className="nextPage">{">"}</Page>
    </PageRow>
	)
}

export default Pagination;