import React,{ useState, useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from  './appwrite/auth'
import {login, logout} from './store/authSlice'
import { Outlet } from 'react-router-dom'
import {Footer, Header} from './components'

function App() {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    
    useEffect(()=>{
      authService.getCurrentUser()
      .then((userData)=>{
        if(userData){
          dispatch(login({userData}))
        }else{
          dispatch(logout())
        }
      })
      .finally(()=>{ setLoading(false) })
    })

    return !loading ? (
    <div className='min-h-sc flex flex-wrap content-between bg-gray-400'>
    <div className='w-full h-screen block'>
        <Header />
        <main>
         <Outlet />
        </main>
        <Footer />
    </div>
    </div>
    
  ) : (null)
}

export default App
