import React from 'react'
import PropTypes from 'prop-types'
import { useLoaderData } from 'react-router'

const UserDetails = () => {
    const user = useLoaderData()
    const {name} = user
    return (
        <div>
            <h2>Name : {name}</h2>
        </div>
    )
}

UserDetails.propTypes = {}

export default UserDetails