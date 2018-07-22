import React from 'react'
import styled , { keyframes } from 'styled-components'
import { red } from '../styles/main';

const Loader = () => (
    <LoaderContainer>
    </LoaderContainer>
)
const spin = keyframes`
  to {
      transform: rotate(360deg);
  }
`

const LoaderContainer = styled.div`{
    width: 50px;
    height: 50px;
    font-color: white;
    position: relative;
    border-radius: 50%;
    margin: 0 auto;
    margin-top: 15rem;
    &:after {
        content: '';
        display: block;
        width: 50px;
        height: 50px;
        position: absolute;
        top: -2px;
        left: -2px;
        border-radius: 50%;
        border: 2px solid transparent;
        border-top-color: ${red};
        animation: ${spin} .8s linear infinite;
    }
}`



export default Loader