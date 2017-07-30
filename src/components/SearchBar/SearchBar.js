import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

const SearchBar = props => {
  return (
    <header>
      <h1>Reddit Search</h1>
      <span>{props.searchTerm}</span>
      <input
        type="text"
        className="pull-right"
        name="searchTerm"
        // placeholder="funny"
        value={props.searchTerm}
        onClick={() => props.handleSelectSearchInput()}
        onBlur={() => props.handleUnselectSearchInput()}
        onChange={event => props.handleChangeSearchTerm(event.target.value)} />
      <button
        type="button"
        className="pull-right"
        onClick={() => props.handleSearchSubmit(props.searchTerm)}>
          Search
      </button>
    </header>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  searchInputActive: PropTypes.bool,
  handleChangeSearchTerm: PropTypes.func.isRequired,
  handleSelectSearchInput: PropTypes.func.isRequired,
  handleUnselectSearchInput: PropTypes.func.isRequired,
  handleSearchSubmit: PropTypes.func.isRequired
};
