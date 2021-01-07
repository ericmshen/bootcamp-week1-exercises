import React from 'react'
import AddButton from '../AddButton'

class AddTodoBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('dummy handleSubmit');
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <label>
                    Add a todo:
                    <input type="text" />
                </label>
                <AddButton alertText='add this'></AddButton>
            </form>
        )
    }
}

export default AddTodoBar