import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const hadleInputSubmit = (evt) => {
    evt.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories(c => [inputValue, ...c]);
      setInputValue('');
    }
  }

  return (
    <form className="animate__animated animate__fadeIn" onSubmit={ hadleInputSubmit }>
      <input
        type="text"
        value={inputValue}
        onChange={ handleInputChange }
      />
    </form>
  );
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
};

export default AddCategory;
