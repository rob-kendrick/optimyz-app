import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
`

export const StyledTextInput = styled.input`
  flex: 1 0;
  min-width: 50px;
  min-height: 25px;
  font-size: inherit;
  background-color: transparent;
  padding: 5px;
  margin: 0px 5px;
  border-radius: 20px;
  border: 1px solid black;
`

export const StyledButton = styled.button`
  min-width: 25px;
  padding: 10px;
  min-height: 30px;
  border-radius: 20px;
  background-color: #00bf00;
  border: 1px solid black;
  color: white;
  &:hover {
    cursor: pointer;
  }
`