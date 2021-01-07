import React from 'react'
import AddButton from '../AddButton'
class AddTodoBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        alert(e.target.value);
        this.props.addTodo(e.target.value)
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <label>
                    Add a todo:
                    <input type="text" value={this.props.newTodo}/>
                </label>
                <AddButton></AddButton>
            </form>
        )
    }
}

export default AddTodoBar