import React, { Component} from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <header>
        <div>
          <h1>Reddit</h1>
          <form
            onSubmit={event => {
              event.preventDefault();
              document.getElementById('search-bar').blur();
              this.props.handleSearchSubmit(this.props.searchTerm);
            }}
          >
            <input
              type="text"
              id="search-bar"
              className={this.props.searchInputActive ? 'active' : ''}
              name="searchTerm"
              value={this.props.searchTerm}
              onClick={() => this.props.handleSelectSearchInput()}
              onBlur={() => this.props.handleUnselectSearchInput()}
              onChange={event => this.props.handleChangeSearchTerm(event.target.value)}
            />
          </form>
        </div>
      </header>
    );
  }

  componentDidMount() {
    this.props.handleSearchSubmit(this.props.searchTerm);
  }
}

export default SearchBar;

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  searchInputActive: PropTypes.bool,
  handleChangeSearchTerm: PropTypes.func.isRequired,
  handleSelectSearchInput: PropTypes.func.isRequired,
  handleUnselectSearchInput: PropTypes.func.isRequired,
  handleSearchSubmit: PropTypes.func.isRequired
};
