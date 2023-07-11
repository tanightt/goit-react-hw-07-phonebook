import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'components/redux/operations';
import { selectContacts, selectFilter } from 'components/redux/selectors';
import { DeleteBtn } from './ContactList.styled';

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
