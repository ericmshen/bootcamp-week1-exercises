import React from 'react'
import {Link} from 'react-router-dom'
import {SimpleNav} from './styles.js'

const Navbar = () => {
    return (
        <SimpleNav>
            <Link to='/weather'>check the weather</Link>
            <Link to='/todos'>do stuff</Link>
        </SimpleNav>
    )
}

export default Navbar