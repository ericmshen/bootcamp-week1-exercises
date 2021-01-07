import React from 'react'
import TodosList from './TodosList'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todos: ['foo', 'bar', 'baz']};
  }

  render() {
    return (
      <>
        <h1>you gotta do this stuff bruh</h1>
        <div>
          <TodosList todos={this.state.todos}></TodosList>
        </div>
      </>
    )
  }
}

export default App
