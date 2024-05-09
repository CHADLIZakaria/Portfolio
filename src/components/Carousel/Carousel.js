import { faChevronLeft, faChevronRight } from '@fortawesome/fontawesome-free-solid'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './Carousel.scss'

const Carousel = ({imageData, onClose}) => {
    const [activeIndex, setActiveIndex] = useState(0)

    const changeIndex = (index) => {
        if(index === imageData.length) setActiveIndex(0)
        else if (index === -1) setActiveIndex(imageData.length-1)
        else setActiveIndex(index)
    }

    return (
        <div className='carousel-project'>
            <FontAwesomeIcon icon={faXmark} className='close' onClick={onClose}/>
            <div className='carousel-inner'>
                {imageData.map((screen, index) => (
                    <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`} >
                        <img src={screen} alt={`image_${index}`} />
                    </div>
                ))}
            </div>
            <button className='carousel-control-prev' onClick={() => changeIndex(activeIndex-1)}>
                <FontAwesomeIcon icon={faChevronLeft}/>
            </button>
            <button  className='carousel-control-next'>
                <FontAwesomeIcon icon={faChevronRight} onClick={() => changeIndex(activeIndex+1)} />
            </button>
        </div>
    )
}

export default Carousel