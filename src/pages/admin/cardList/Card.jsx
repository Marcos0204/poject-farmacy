import React from 'react'




const Card = ({ item }) => {
  return (
    <li className='card-li'>
        <div className='card-container'>
            <div className='img-container'>
                <img src={item.img} alt='' />
            </div>
            <div className='card-body'>
               <div className='card-info'>
                    <p className='body-title'>{ item.title } </p>
                    <p className='body-price'>{item.price}, 00 <span>Bs</span></p>
               </div>
               <div className='card-button'>
                    <button >ver Detalle</button>
                </div>
            </div>
            
        </div>
    </li>
  )
}

export default Card
