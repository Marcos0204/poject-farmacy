import React from 'react'
import Card from './Card'
import './index.css'

import { info } from './data' 

const CardList = () => {
  return (
    <section>
      <ul className='container-card' >
        {
            info.map((item, index) => <Card key={index}  item={item}   />)
        }
      </ul>
      
    </section>
  )
}

export default CardList
