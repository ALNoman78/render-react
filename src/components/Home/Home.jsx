import React from 'react'
import PropTypes from 'prop-types'
import { Outlet } from 'react-router'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

Home.propTypes = {}

export default Home