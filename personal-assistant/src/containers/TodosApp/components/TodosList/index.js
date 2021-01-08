import React from 'react'
import TodosRow from './components/TodosRow'
import TodosListBlank from './components/TodosListBlank'

class TodosList extends React.Component {
    constructor(props) {
        super(props);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.state = {deleteId: 0}
    }

    deleteTodo (id) {
        this.setState({deleteId: id});
        this.props.onDeleteTodo(id);
    }

    render() {
        const displayTodos = this.props.todos.filter((todo) => todo.value.toLowerCase().includes(this.props.searchText.toLowerCase()));
        const showTodos = !(displayTodos.length === 0);

        if (showTodos) {
            const todoRows = displayTodos.map((todo) => 
                <TodosRow 
                    todo = {todo.value} 
                    id = {todo.id}
                    onDeleteSubmit = {this.deleteTodo}
                />);
            return (
                <div>
                    {todoRows}
                </div>
            )
        }

        else {
            return (
                <TodosListBlank />
            )
        }
    }
}

export default TodosList