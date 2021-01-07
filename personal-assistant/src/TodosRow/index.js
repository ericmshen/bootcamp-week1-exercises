import React from 'react'
import DeleteButton from '../DeleteButton'
import { SimpleRow } from './styles.js'

class TodosRow extends React.Component {
    render() {
        return (
            <SimpleRow>
                <div style={{textAlign: 'center'}}> {this.props.todo} </div>
                <div> <DeleteButton alertText={this.props.todo}></DeleteButton> </div>
            </SimpleRow>
        )
    }
}

export default TodosRow