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
        <ul className='nav-list'>
          <li className='nav-list-item'>
            Medicamentos
          </li>
          <li className='nav-list-item'>
            Belleza
          </li>
          <li className='nav-list-item'>
            Limpieza
          </li>
        </ul>
      </div>
      <div className='layout-main'>
        <h2>tablas</h2>
      </div>
      
    </div>
  )
}

export default LayoutAdmin