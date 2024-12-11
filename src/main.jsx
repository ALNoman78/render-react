import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx'
import TodoList from './components/Todo list/TodoList.jsx'
import UserDetails from './components/User Details/UserDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/todo',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <TodoList></TodoList>
      },
      {
        path: '/todo/:userId',
        // loader : ({params}) => console.log(params),
        loader : ({params}) => fetch (`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      },
      {
        path: '/portfolio',
        element: <Portfolio></Portfolio>
      },
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
