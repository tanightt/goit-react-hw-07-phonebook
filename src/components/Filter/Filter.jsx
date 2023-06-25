import PropTypes from 'prop-types';

export const Filter = ({ filter, handleChangeValue }) => {
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

Filter.propTypes = {
  filter: PropTypes.string,
  handleChangeValue: PropTypes.func,
};
