import React from 'react';
import Bar from '../Bar/Bar';
import "./Search.scss";

function Search() {
  return (
    <div className='search'>
      <form>
        <input className='text' type="search" placeholder='Search' />
        <button type='submit'><i class="fal fa-search"></i></button>
      </form>
      <Bar />
    </div>
  );
}

export default Search;
