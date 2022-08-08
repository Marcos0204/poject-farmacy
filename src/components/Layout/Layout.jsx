import React from 'react'
import { useLocation } from 'react-router-dom' 

import AppBar from '../AppBar/AppBar'

const Layout = ({ children }) => {

  const location = useLocation()
  
  return (
    <>
      {location.pathname != '/login' && <AppBar/> }
      {children}
    </>
  )
}

export default Layout
