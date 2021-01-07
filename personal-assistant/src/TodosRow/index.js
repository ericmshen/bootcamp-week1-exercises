import React from 'react'
import DeleteButton from '../DeleteButton'
import { SimpleRow } from './styles.js'

class TodosRow extends React.Component {
    constructor(props) {
        super(props);
        this.todo = props.todo;
    }

    render() {
        return (
            <SimpleRow>
                <div> {this.todo} </div>
                <div> <DeleteButton alertText={this.todo}></DeleteButton> </div>
            </SimpleRow>
        )
    }
}

export default TodosRow