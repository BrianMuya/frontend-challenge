import React from 'react'
import PropTypes from 'prop-types'

const Search = ({ handleOnChange }) => (
    <input type='text' placeholder='Search movies' onChange={handleOnChange} />
)
 
Search.propTypes = {
    handleOnChange: PropTypes.func.isRequired
}
export default Search