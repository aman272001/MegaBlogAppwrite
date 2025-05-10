import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogOutBtn() {
    const dispatch = useDispatch()
    const handleLogout = ()=>{
        authService.logout().then(()=>{
            dispatch(logout())

        })


    }
  return (
    <button
    className='inline-block text-xl px-5 py-2 duration-200 text-white font-semibold hover:bg-blue-600 hover:text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1'
    onClick={handleLogout}
    >Logout</button>
  )
}

export default LogOutBtn