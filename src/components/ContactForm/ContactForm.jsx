import { useState } from 'react';
import { StyledBtn, StyledForm } from './ContactForm.styled';

export const ContactForm = ({ handleSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeValue = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    handleSubmit({ name, number });
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
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
        value={number}
        required
      />
      <StyledBtn type="submit">Add contact</StyledBtn>
    </StyledForm>
  );
};
