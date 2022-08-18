import { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa';
import { useNavigate }  from 'react-router-dom'




import { Div,
  ImageLogo,
  InputSerch,
  IconSearch,
  IconDelete,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks

} from './styled'
import Logo from '../../../../img/logo.jpg'



const AppBarAdmin = () => {

  const [ Search, SetSearch ] = useState('')

  const [ click, setClick ] = useState(false);

  const Navigate=  useNavigate()


  const haledClick = ()=> setClick(!click)

  const handleSearch = () => {
    console.log('buscando..')
    Navigate('/buscar')
  }
  return (
    <>
      <Div>
        <ImageLogo src={Logo} atl='logo' />

        <MobileIcon 
            onClick={haledClick}
        >
                { click ? <FaTimes/>
                    : 
                    <FaBars/>
                }
        </MobileIcon>
        <NavMenu click={click}  onClick={haledClick}>
          <NavItem>
            <NavLinks to='/'>
                Inicio
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='/admin/nuevo-Producto'>
                Nuevo Producto
            </NavLinks>
          </NavItem>
        </NavMenu>
      </Div>
    </>
  )
}

export default AppBarAdmin
