import React from "react";
import PropTypes from "prop-types";

const ImgSearch = ({ handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className='w-75'>
          Buscar: <input className='w-100' type='text' name='inputText' />
        </label>
        <button type='submit' className='btn btn-warning  m-2'>
          <span className='material-icons'>image_search</span>
        </button>
      </form>
    </>
  );
};

ImgSearch.propTypes = {
  handleSubmit: PropTypes.func,
};

export default ImgSearch;
