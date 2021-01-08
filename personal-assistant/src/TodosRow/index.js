import React from 'react'
import { SimpleRow } from './styles.js'

class TodosRow extends React.Component {
    render() {
        return (
            <SimpleRow>
                <div style={{textAlign: 'center'}}> {this.props.todo} </div>
                <div> 
                    
                </div>
            </SimpleRow>
        )
    }
}

export default TodosRow