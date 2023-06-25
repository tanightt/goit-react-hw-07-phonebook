import { StyledBtn, StyledForm } from './ContactForm.styled';
import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeValue = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <StyledForm onSubmit={this.handleFormSubmit}>
        <h3>Name</h3>
        <input
          onChange={this.handleChangeValue}
          type="text"
          name="name"
          pattern="^[A-Za-zА-Яа-яЁё]+\s?[A-Za-zА-Яа-яЁё]+$"
          title="Name may contain only letters and a single space in between. For example Rosie Simpson"
          value={name}
          required
        />
        <h3>Number</h3>
        <input
          onChange={this.handleChangeValue}
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
  }
}
