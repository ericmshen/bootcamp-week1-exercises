import React from 'react'
// import AddButton from '../AddButton'
class AddTodoBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {newTodo: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({newTodo: e.target.value});
    }

    handleSubmit(e) {
        this.props.onNewTodoSubmit(this.state.newTodo);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <input type="text" placeholder="add a todo" value={this.state.newTodo} onChange={this.handleChange}/>
                <button type="submit" value="Submit">add todo</button>
            </form>
        )
    }
}

export default AddTodoBar