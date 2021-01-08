import React from 'react'
import { SimpleButton } from './styles'

class DeleteButton extends React.Component {
    render() {
        return (
            <SimpleButton type='submit' onClick={this.props.func}>delete</SimpleButton>
        )
    }
}
  
export default DeleteButton