import PropTypes from 'prop-types'
import { useLoaderData } from 'react-router'
import NewUser from '../New User/NewUser'

const TodoList = () => {

    const users = useLoaderData()
    return (
        <div className='text-center'>TodoList : {users.length}
        <div className='grid grid-cols-1 md:grid-cols-4 my-5'>
            {
                users.map((user , idx) => <NewUser key={idx} props = {user}></NewUser>)
            }
        </div>
        </div>

    )
}

TodoList.propTypes = {}

export default TodoList