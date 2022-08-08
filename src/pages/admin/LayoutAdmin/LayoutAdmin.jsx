import React from 'react'
import AppBarAdmin from './AppBar/AppBarAdmin'

const LayoutAdmin = ({children}) => {
  return (
    <>
      <AppBarAdmin/>
      {children}
    </>
  )
}

export default LayoutAdmin