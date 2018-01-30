import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar/SearchBar';
import {
  selectSearchInput,
  unselectSearchInput,
  changeSearchTerm,
  getSearchResultsStart
} from '../actions/index';

const mapStateToProps = state => {
  return {
    searchInputActive: state.searchBar.searchInputActive,
    searchTerm: state.searchBar.searchTerm,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSelectSearchInput: () => {
      dispatch(selectSearchInput());
    },
    handleUnselectSearchInput: () => {
      dispatch(unselectSearchInput());
    },
    handleChangeSearchTerm: (searchTerm) => {
      dispatch(changeSearchTerm(searchTerm));
    },
    handleSearchSubmit: (searchTerm) => {
      dispatch(getSearchResultsStart(searchTerm));
      dispatch(unselectSearchInput());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
