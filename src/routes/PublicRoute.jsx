import React, { useContext } from 'react'
import Layout from '../components/Layout/Layout'
import { Navigate }  from 'react-router-dom'
import { AppContext } from '../context/AppContext'


const PublicRoute = ({ children }) => {
    const state = useContext(AppContext)
    const isAuth = state.isAuth
  return !isAuth ?
        <Layout>
            {children}
        </Layout>
    : <Navigate to='/admin' />
  
}

export default PublicRoute
