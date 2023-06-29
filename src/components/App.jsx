import { styled } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChangeValue = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const handleSubmit = ({ name, number }) => {
    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${name} is already in contacts!`);
      return;
    }

    const newContact = { id: uuidv4(), name, number };
    setContacts(prev => [...prev, newContact]);
  };

  const handleDelete = id => {
    setContacts(prev => prev.filter(item => item.id !== id));
  };

  const handleFilter = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Card>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />

      <h2>Contacts</h2>
      <Filter filter={filter} handleChangeValue={handleChangeValue} />
      <ContactList contacts={handleFilter()} handleDelete={handleDelete} />
    </Card>
  );
};

const Card = styled.div`
  margin-left: 20px;
`;

export default App;
