//@ts-nocheck
import React from 'react'
import apiService from '../services/apiservice.ts';
import { FlexContainer, StyledTextInput, StyledButton } from '../Styles/Form.Styled.ts'

function SearchInput({userInput, setUserInput, searchResult, setSearchResult}) {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    apiService.getByTitle(userInput)
    .then(res => {if(!res.Title) {
      setSearchResult(`We couldn't find that movie :( Please try a different query.`)
    } else {
      setSearchResult(res.Title)
    }})
  }

  return (
    <FlexContainer>
      <form onSubmit={handleSubmit}>
        <StyledTextInput onChange={handleChange}></StyledTextInput>
        <StyledButton type='submit'>Search!</StyledButton>
      </form>
    </FlexContainer>
  )
}

export default SearchInput