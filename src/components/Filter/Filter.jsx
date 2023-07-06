import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterContact } from 'components/redux/filterSlice';

export const Filter = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const handleChangeValue = event => {
    const { value } = event.target;
    setFilter(value);
    dispatch(filterContact(value));
  };

  return (
    <>
      <h3>Find contacts by name</h3>
      <input
        onChange={handleChangeValue}
        type="text"
        name="filter"
        value={filter}
      />
    </>
  );
};
