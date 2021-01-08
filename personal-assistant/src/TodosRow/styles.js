import styled from 'styled-components'

export const SimpleRow = styled.div`
  background: #DDD;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  text-align: center;
  margin: 0 5%;
  padding: 0 20%;
  transition: color 0.2s;

  &:hover {  
      background-color: #EEE;
  }
`