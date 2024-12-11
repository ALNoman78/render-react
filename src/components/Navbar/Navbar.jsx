import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

const Navbar = () => {
    return (
        <div className='md:w-10/12 mx-auto'>
            <ul className='flex items-center gap-5 justify-between '>
                <Link className='btn-ghost btn my-6' to="/">Home</Link>
                <Link className='btn-ghost btn my-6' to="/todo">Todo</Link>
                <Link className='btn-ghost btn my-6' to="/portfolio">Portfolio</Link>
            </ul>
        </div>
    )
}

Navbar.propTypes = {}

export default Navbar