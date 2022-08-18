import React, {useContext, useEffect, useMemo} from 'react'
import TableAdmin from '../ComponentsAdmin/TableAdmin/TableAdmin'
import { AppContext } from '../../../context/AppContext'


const MedicinesAdmin = () => {

  const state = useContext(AppContext)
  
  const allData = state.allData

  const dataMedicices = useMemo(() => {
        
    return allData && allData.filter(item => {
        
        return item.category === 'medicina'
    })
}, [allData])

  return (
    <div>
      <h1>medicines</h1>
      <TableAdmin data={dataMedicices} />
    </div>
  )
}

export default MedicinesAdmin
