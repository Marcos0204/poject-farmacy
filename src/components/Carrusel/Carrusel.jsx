import React, {useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'

const Carrusel = ( ) => {

    const [slideIndex, setSlideIndex] = useState(1)

    

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }
    

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }
    

    const moveDot = index => {
        setSlideIndex(index)
    }

    setTimeout(() => {
        nextSlide()
    },[12000])

    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                
                return (
                    <div
                        key={obj.id}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={obj.img} 
                        />
                    </div>
                )
            })}
           {/**  <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>*/}

            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div
                        key={index}
                        ////onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default Carrusel;