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
    this.state = {todos: ['foo', 'bar', 'baz'], searchText: ''};
    this.addTodo = this.addTodo.bind(this);
    this.changeSearch = this.changeSearch.bind(this);
  }

  addTodo(newTodo) {
    this.state.todos.append(newTodo);
  }

  changeSearch(query) {
    this.setState({searchText: query});
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
        <AddTodoBar 
          newTodo = {this.state.newTodo}
          addTodo = {this.addTodo}
        />
        <SearchBar 
          query = {this.state.searchText}
          onSearchTextChange = {this.changeSearch}
        />
        <TodosList 
          todos={this.state.todos} 
          searchText={this.state.searchText}
        />
      </ThemeProvider>
    )
  }
}

export default App
