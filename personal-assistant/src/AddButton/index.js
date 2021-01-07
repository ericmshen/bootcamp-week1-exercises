import React from 'react'
import { SimpleButton } from './styles'

const AddButton = (props) => (
    <SimpleButton type="submit" onClick={() => alert(props.alertText)}>add todo item</SimpleButton>
)
  
export default AddButton