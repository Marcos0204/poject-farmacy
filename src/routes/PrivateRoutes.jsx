import React, { useContext } from 'react'
import Layout from '../components/Layout/Layout'
import { Navigate,  } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import LayoutAdmin from '../pages/admin/LayoutAdmin/LayoutAdmin'

const PrivateRoute = ({ children }) => {
    const state = useContext(AppContext)
    const isAuth = state.isAuth
  return isAuth ?
        <LayoutAdmin>
            {children}
        </LayoutAdmin>
        : <Navigate to='/' />
  
}

export default PrivateRoute
