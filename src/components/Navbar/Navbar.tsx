import React from 'react'
import { Link } from 'react-router-dom'
import { colors } from '../../utils/color'
import { StyledNavBar } from './Navbar.styled'

const Navbar = () => {
    return (
        <StyledNavBar>
            <Link to="/" style={linkStyles}>Home</Link>
            <Link to="/stations" style={linkStyles}>Stations</Link>
            <Link to="/journey" style={linkStyles}>Journey</Link>
        </StyledNavBar>
    )
}

export default Navbar

const linkStyles = {
    textDecoration: 'none',
    color: colors.secondary,
    padding: '10px',
    margin: '10px',
    border: '1px solid black',
    borderRadius: '5px'
}