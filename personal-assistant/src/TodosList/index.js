import React from 'react'
import TodosRow from '../TodosRow'

class TodosList extends React.Component {
    constructor(props) {
        super(props);
        this.todos = props.todos;
    }

    render() {
        const todoRows = this.todos.map((todo) => <TodosRow todo={todo}></TodosRow>)

        return (
            <div>
                {todoRows}
            </div>
        )
    }
}

export default TodosList