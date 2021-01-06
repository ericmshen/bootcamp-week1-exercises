import React from 'react'
import DeleteButton from './DeleteButton'
// import TodosList from './TodosList'

const App = () => (
  <ThemeProvider theme = { theme }>
    <div>
      yo<br></br>
      <DeleteButton alertText='you pressed me'></DeleteButton>
    </div>
  </ThemeProvider>
)

export default App
