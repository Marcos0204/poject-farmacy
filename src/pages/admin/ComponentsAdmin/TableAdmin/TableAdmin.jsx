import React, { useContext} from 'react'
import './Table.css'
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AppContext } from '../../../../context/AppContext';



const TableAdmin = ({data}) => {
    const {deleteItem} = useContext(AppContext)

    const deleteItemID = (id) => {
        console.log('eliminando', id)
        deleteItem(id)
    }
  return (
    <div>
      <table id="customers">

            <thead>    
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Imagen</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                    <th>ver</th>
                </tr>
            </thead>
            {
                data.map((item, index) => {

                    return (
                        <tbody  key={item.id}>    
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td><img src={item.url} className='table-img' /></td>
                                <td className='btn-edit' ><BiEditAlt/> </td>
                                <td className='btn-delete' 
                                    onClick={() => deleteItemID(item.id)}
                                ><RiDeleteBin6Line/></td>
                                <td>Button</td>
                            </tr>
                        </tbody>
                    )
                })
            }
            
            </table>
    </div>
  )
}

export default TableAdmin
