import React from 'react'
import { StyledResult } from '../Styles/Result.styled.ts'

function Result({searchResult, setSearchResult}) {

  return (
    <StyledResult>
      <h3>Your search returned:</h3>
      {searchResult !== null &&  <h4>{searchResult}</h4>}
    </StyledResult>
  )
}

export default Result