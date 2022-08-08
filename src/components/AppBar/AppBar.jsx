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
import Logo from '../../img/logo.jpg'



const AppBar = () => {

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

        <InputSerch>
          <input 
            type='text'
            placeholder='Buscar...'
            value= {Search}
            onChange= { e => SetSearch(e.target.value)}

          />
          <IconDelete onClick= {() => SetSearch('')} > X</IconDelete>
          <IconSearch onClick={handleSearch} />
        </InputSerch>


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
            <NavLinks to='/medicamentos'>
                Medicina
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='/belleza'>
                Belleza
            </NavLinks>
          </NavItem>
        </NavMenu>
       
      </Div>
    </>
  )
}

export default AppBar
