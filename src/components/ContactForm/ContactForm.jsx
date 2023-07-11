import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { StyledBtn, StyledForm } from './ContactForm.styled';
import { selectContacts } from 'components/redux/selectors';
import { addContact } from 'components/redux/operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChangeValue = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setPhone(value);
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      toast.info(`${name} is already in contacts!`, { theme: 'dark' });
      resetForm();
      return;
    }
    dispatch(addContact({ name, phone }));
    toast.success(`${name} is added to the contacts!`, {
      theme: 'dark',
    });
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <h3>Name</h3>
      <input
        onChange={handleChangeValue}
        type="text"
        name="name"
        pattern="^[A-Za-zА-Яа-яЁё]+\s?[A-Za-zА-Яа-яЁё]+$"
        title="Name may contain only letters and a single space in between. For example Rosie Simpson"
        value={name}
        required
      />
      <h3>Number</h3>
      <input
        onChange={handleChangeValue}
        type="tel"
        name="number"
        pattern="^\d{3}(-?\d{2}){1,2}$"
        title="Phone number should contain seven digits. For example 123-45-67 or 1234567."
        value={phone}
        required
      />
      <StyledBtn type="submit">Add contact</StyledBtn>
    </StyledForm>
  );
};
