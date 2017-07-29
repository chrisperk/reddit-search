import {connect} from 'react-redux';
import SearchBar from '../components/SearchBar/SearchBar';
import {
  changeSearchInputActive,
  changeSearchTerm
} from '../actions/index';

const mapStateToProps = state => {
  return {
    searchInputActive: state.searchBar.searchInputActive,
    searchTerm: state.searchBar.searchTerm,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChangeSearchInputActive: () => {
      dispatch(changeSearchInputActive());
    },
    handleHideChannelsList: () => {
      dispatch(hideChannelsList());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
