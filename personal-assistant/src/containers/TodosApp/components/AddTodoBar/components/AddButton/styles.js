import styled from 'styled-components'

export const SimpleButton = styled.button`
  background: #DDD;
  border: 2px solid grey;
  border-radius: 2px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover { 
      color: white; 
      background-color: blue;
  }
`