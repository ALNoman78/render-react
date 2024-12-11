import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

const NewUser = ({ props }) => {
    const { id, name, username, email } = props
    console.log(props);
    return (
        <div className="card bg-base-100 w-96 m-5 shadow-xl">
            <div className="card-body">
                <p>Id : {id}</p>
                <h2>Name : {name}</h2>
                <p>Username : {username}</p>
                <p>E-mail : {email}</p>
                <div className="card-actions">
                    <Link className='btn btn-primary' to={`/todo/${id}`}> Show Details</Link>
                </div>
            </div>
        </div>
    )
}

NewUser.propTypes = {}

export default NewUser