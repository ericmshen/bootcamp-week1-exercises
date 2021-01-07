import React from 'react'
import TodosList from './TodosList'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import styled from 'styled-components'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todos: ['foo', 'bar', 'baz']};
  }

  render() {
    const Header = styled.h1`
    font-family: ${props => props.theme.font.header.family};
    font-weight: ${props => props.theme.font.header.weight};
    color: ${props => props.theme.font.header.color};
    `
    return (
      <ThemeProvider theme={theme}>
        <Header>you gotta do this stuff bruh</Header>
        <div>
          <TodosList todos={this.state.todos}></TodosList>
        </div>
      </ThemeProvider>
    )
  }
}

export default App
