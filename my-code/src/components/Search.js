import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {transformCenter, spacerTopSmall} from '../styles/main'

const Search = ({ handleOnChange }) => (
    <Input type='text' placeholder='Search movies' onChange={handleOnChange} />
)
 
Search.propTypes = {
    handleOnChange: PropTypes.func.isRequired
}

const Input = styled.input`{
    display: block;
    width: 90%;
    border-radius: 5px;
    ${spacerTopSmall}
    padding-top: 12px;
    padding-bottom: 12px;
    ${transformCenter()}
}`
export default Search