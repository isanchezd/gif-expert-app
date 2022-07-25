import { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const onChangeValue = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();

    if (inputValue) {
      setCategories((categories) => [inputValue, ...categories]);
      setInputValue('');
    }
  };

  return (
    <form data-testid='form' onSubmit={onSubmitForm}>
      <input
        type='text'
        placeholder='Añadir Categoria'
        data-testid='input'
        value={inputValue}
        onChange={onChangeValue}
      ></input>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
