import React from 'react'
import { Link } from 'react-router-dom'
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
            <Link to={'/admin/medicinas'}>
              Medicamentos
            </Link>
          </li>
          <li className='nav-list-item'>
            <Link to={'/admin/nuevo-Producto'}>
               Nuevo Producto
            </Link>
          </li>
        </ul>
      </div>
      <div className='layout-main'>
        <h2>tablas</h2>
        {children}
      </div>
      
    </div>
  )
}

export default LayoutAdmin