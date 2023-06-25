import { styled } from 'styled-components';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <DeleteBtn type="button" onClick={() => handleDelete(contact.id)}>
            Delete
          </DeleteBtn>
        </li>
      ))}
    </ul>
  );
};

const DeleteBtn = styled.button`
  width: 50px;
  margin-top: 5px;
  margin-left: 5px;
  border-radius: 5px;
  border-color: initial;
`;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  handleDelete: PropTypes.func,
};
