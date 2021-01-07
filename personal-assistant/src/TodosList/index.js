import React from 'react'
import TodosRow from '../TodosRow'
import TodosListBlank from '../TodosListBlank'

class TodosList extends React.Component {
    render() {
        const displayTodos = this.props.todos.filter((todo) => todo.toLowerCase().includes(this.props.searchText.toLowerCase()));
        console.log(displayTodos);
        const showTodos = !(displayTodos.length === 0);

        if (showTodos) {
            const todoRows = displayTodos.map((i) => <TodosRow todo={i}></TodosRow>);
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