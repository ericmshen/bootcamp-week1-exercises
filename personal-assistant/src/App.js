import React from 'react'
import {Switch, Route} from 'react-router-dom'
import TodosApp from './TodosApp'
import Weather from './Weather'
import Navbar from './Navbar'

const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path='/weather' component={Weather} />
                <Route path='/todos' component={TodosApp} />
            </Switch>
        </>
    )
}

export default App