import React from 'react'
import './Table.css'


const TableAdmin = () => {
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
                [1,2,3,4,5,6,7].map((item, index) => {

                    return (
                        <tbody  key={item}>    
                            <tr>
                                <td>atamel </td>
                                <td>12 bs</td>
                                <td>imagen</td>
                                <td>E </td>
                                <td>X</td>
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
