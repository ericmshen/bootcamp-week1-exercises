import styled from 'styled-components'

export const SimpleRow = styled.div`
  background: #BBB;
  display: flex;
  justify-content: space-around;
  transition: color 0.2s;

  &:hover {  
      background-color: #DDD;
  }
`