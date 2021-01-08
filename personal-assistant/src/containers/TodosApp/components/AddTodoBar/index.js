import React from 'react'
import AddButton from './components/AddButton'
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
        if (!this.state.newTodo) {
            alert('cannot add empty todo');
        }
        else {
            this.props.onNewTodoSubmit(this.state.newTodo);
            this.setState({newTodo: ''});
            e.preventDefault();
        }
    }

    render() {
        return (
            <form style={{textAlign: 'center'}} onSubmit = {this.handleSubmit}>
                <input type="text" placeholder="add a todo" value={this.state.newTodo} onChange={this.handleChange}/>
                <AddButton />
            </form>
        )
    }
}

export default AddTodoBar