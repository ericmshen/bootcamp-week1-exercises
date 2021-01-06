import React from 'react'
import { SimpleButton } from './styles'

const DeleteButton = (props) => (
    <SimpleButton onClick={() => alert(props.alertText)}>delete</SimpleButton>
)
  
export default DeleteButton