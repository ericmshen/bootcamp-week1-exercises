import React from 'react'
import TodosList from '../TodosList'
import AddTodoBar from '../AddTodoBar'
import SearchBar from '../SearchBar'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import styled from 'styled-components'

class TodosApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todos: [], nextId: 1, searchText: ''};
    this.addTodo = this.addTodo.bind(this);
    this.changeSearch = this.changeSearch.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  addTodo(newInputTodo) {
    const newTodoObject = {
      value: newInputTodo,
      id: this.state.nextId,
    }
    const newId = this.state.nextId + 1;
    const newtodos = this.state.todos.concat(newTodoObject);
    this.setState({todos: newtodos, nextId: newId});
  }

  changeSearch(query) {
    this.setState({searchText: query});
  }

  deleteTodo(deleteId) {
    const newtodos = this.state.todos.filter((todo) => todo.id !== deleteId);
    this.setState({todos: newtodos});
  }

  render() {
    const Header = styled.h1`
    font-family: ${props => props.theme.font.header.family};
    font-weight: ${props => props.theme.font.header.weight};
    color: ${props => props.theme.font.header.color};
    text-align: center;
    `

    return (
      <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'space-between', padding: '50px'}}>
        <ThemeProvider theme={theme}>
          <Header>things to do</Header>
          <AddTodoBar 
            newInputTodo = {this.state.newTodo}
            onNewTodoSubmit = {this.addTodo}
          />
          <SearchBar 
            query = {this.state.searchText}
            onSearchTextChange = {this.changeSearch}
          />
          <br />
          <TodosList 
            todos = {this.state.todos} 
            searchText = {this.state.searchText}
            deleteId = {this.state.deleteId}
            onDeleteTodo = {this.deleteTodo}
          />
        </ThemeProvider>
      </div>
    )
  }
}

export default TodosApp