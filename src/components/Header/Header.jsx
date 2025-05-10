import React from 'react'
import {Container, Logo, LogOutBtn} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state)=>state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {name: 'Home', slug: '/', active: true},
    {name: 'Login', slug: '/login', active: !authStatus},
    {name: 'Signup', slug: '/signup', active: !authStatus},
    {name: 'All Posts', slug: '/all-posts', active: authStatus},
    {name: 'Add Post', slug: '/add-post', active : authStatus},
  ]
  return (
    
    <header className='py-3 shadow-lg bg-gradient-to-r from-gray-700 to-gray-500 border-b-4 border-blue-500'>
      <Container>
        <nav className='flex p-3'>
          <div className='mr-3 transition-transform hover:scale-110'>
          <Link to='/'>
          <Logo width= '70px'/>
          </Link>
          </div>
          <ul className='flex ml-auto items-center'>
            {navItems.map((item)=>
              item.active ? (
                <li key={item.name} className="mx-1">
                  <button
                  onClick={()=> navigate(item.slug)}
                  className='inline-block text-xl px-5 py-2 duration-200 text-white font-semibold hover:bg-blue-600 hover:text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1'
                  >{item.name}</button>
                </li>
              ): null
            )}
            {authStatus && (
              <li className="ml-2">
                <LogOutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header