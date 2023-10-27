import { OneContactDeleteButton } from './OneContact.styled';
import PropTypes from 'prop-types';

export const OneContact = ({ id, name, number, deleteContact }) => {
  return (
    <li>
      <p>{name}:</p>
      <p>{number}</p>
      <OneContactDeleteButton type="button" onClick={() => deleteContact(id)}>
        Delete contact
      </OneContactDeleteButton>
    </li>
  );
};

OneContact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
