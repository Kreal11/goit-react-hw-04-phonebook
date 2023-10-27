import { Component } from 'react';
import {
  StyledSearchWrapper,
  StyledSearchLabel,
  StyledContactsHeader,
  StyledSearchInput,
} from './SearchContact.styled';
import PropTypes from 'prop-types';

export class SearchContacts extends Component {
  render() {
    const { changeFilter, name } = this.props;

    return (
      <StyledSearchWrapper>
        <StyledContactsHeader>Contacts</StyledContactsHeader>
        <StyledSearchLabel htmlFor="filter">
          Find contacts by name👇
        </StyledSearchLabel>
        <StyledSearchInput
          id="filter"
          type="text"
          name="name"
          value={name}
          onChange={changeFilter}
        />
      </StyledSearchWrapper>
    );
  }
}

SearchContacts.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  name: PropTypes.string,
};
