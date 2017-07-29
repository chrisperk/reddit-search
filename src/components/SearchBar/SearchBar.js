import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = props => {
  return (
    <header>
      <h1>Reddit Search</h1>
      <input type="text" className="pull-right" name="searchTerm" value="funny" />
    </header>
  )
}

export default SearchBar;
