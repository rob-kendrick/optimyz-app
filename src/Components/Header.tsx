import React from 'react'
import { StyledHeader } from '../Styles/Header.styled.ts'

function Header() {
  return (
    <StyledHeader>
      <h1>OMDB App</h1>
      <p>Enter your query below.</p>
    </StyledHeader>
  )
}

export default Header