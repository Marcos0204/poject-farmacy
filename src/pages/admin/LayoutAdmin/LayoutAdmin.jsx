import React from 'react'
import AppBarAdmin from './AppBar/AppBarAdmin'
import './layoutAdmin.css'
import Logo from '../../../img/logo.jpg'

const LayoutAdmin = ({children}) => {
  return (
    <div className='container-layout'>
      <div className='layout-nav'>
        <div className='container-logo'>
          <img src={Logo} alt='logo' />
        </div>
        <ul>

        </ul>
      </div>
      <div className='layout-main'>
        <h2>fsdfsdfsdf</h2>
      </div>
      
    </div>
  )
}

export default LayoutAdmin