

import React, {useState} from 'react'
import styled from 'styled-components'
import {RiSearchLine} from 'react-icons/ri'

function Search() {
    const [value, setValue] = useState("")
  return (
    <FormStyle>
        <div>
            <RiSearchLine></RiSearchLine>
            <input type="text" />
        </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
margin: 0rem 20rem;

div{
    width:100%;
    position: relative;
}
input{
    border: none;
    background: linear-gradient(to right, #6bbf59, #08a045);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%
}
svg{
    position:absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
}
`

export default Search