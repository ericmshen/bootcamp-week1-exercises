import React from 'react'
import { SimpleRow } from './styles.js'
import DeleteButton from '../DeleteButton'

class TodosRow extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e) {
        this.props.onDeleteSubmit(this.props.id);
    }

    render() {
        return (
            <SimpleRow>
                <div> {this.props.todo} </div>
                <div> 
                    <DeleteButton func={this.handleDelete}/>
                </div>
            </SimpleRow>
        )
    }
}

export default TodosRow