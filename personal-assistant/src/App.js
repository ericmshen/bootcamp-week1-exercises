import React from 'react'
import TodosList from './TodosList'
import AddTodoBar from './AddTodoBar'
import SearchBar from './SearchBar'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import styled from 'styled-components'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todos: ['foo', 'bar', 'baz'], displaytodos: ['foo']};
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
        <AddTodoBar></AddTodoBar>
        <SearchBar></SearchBar>
        <div>
          <TodosList todos={this.state.displaytodos}></TodosList>
        </div>
      </ThemeProvider>
    )
  }
}

export default App
