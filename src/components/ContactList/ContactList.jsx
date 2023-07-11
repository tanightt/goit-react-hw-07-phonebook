import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'components/redux/operations';
import { selectContacts, selectFilter } from 'components/redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const contactsFilter = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {contactsFilter.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.phone}
          <DeleteBtn
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </DeleteBtn>
        </li>
      ))}
    </ul>
  );
};

const DeleteBtn = styled.button`
  width: 50px;
  margin-top: 10px;
  margin-left: 10px;
  padding: 2px;
  border-radius: 5px;
  border-color: #354cc0;
  cursor: pointer;

  &:hover {
    background-color: #354cc0;
    color: white;
  }
`;
