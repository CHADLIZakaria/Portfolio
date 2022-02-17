import React, { useEffect, useState } from 'react'
import './AboutMe.scss' 
import {faAngleDoubleDown} from '@fortawesome/fontawesome-free-solid'
import myImage from '../../images/my_image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const AboutMe = () => {

    const [currentName, setCurrentName]=useState('')
    const [currentDescription, setCurrentDescription]=useState('')
    const [currentDescriptionPrefix, setCurrentDescriptionPrefix]=useState('')
    
    const [isDeletecurrentDescription, setIsDeleteCurrentDescription]=useState(false)
    
    const [showSubtitle1, setShowSubtitle1] = useState(true)
    
    let resultName='CHADLI Zakaria'
    let resultCurrentDescriptionPrefix='Developper'
    let resultCurrentDescription=['Full Stack', 'Java & Flutter']

    const handleTyping = () => {
        setCurrentName(resultName.substring(0, currentName.length + 1))
    }
    
    useEffect(() => {
        setTimeout(() => {
            handleTyping()
        }, 100)
        setTimeout(() => {
            if(resultName===currentName) {
                setCurrentDescriptionPrefix(resultCurrentDescriptionPrefix.substring(0, currentDescriptionPrefix.length + 1))
                if(resultCurrentDescriptionPrefix===currentDescriptionPrefix) {
                    if(showSubtitle1) {
                        if(isDeletecurrentDescription) {
                            setCurrentDescription(resultCurrentDescription[0].substring(0, currentDescription.length - 1 ))
                            if(currentDescription==='') {
                                setIsDeleteCurrentDescription(false)
                                setShowSubtitle1(false)
                            } 
                        }
                        else {
                            setCurrentDescription(resultCurrentDescription[0].substring(0, currentDescription.length + 1 ))
                            if(resultCurrentDescription[0]===currentDescription) setIsDeleteCurrentDescription(true)
                        }
                    }
                    else {
                        if(isDeletecurrentDescription) {
                            setCurrentDescription(resultCurrentDescription[1].substring(0, currentDescription.length - 1 ))
                            if(currentDescription==='')  {
                                setIsDeleteCurrentDescription(false)
                                setShowSubtitle1(true)
                            }
                        }
                        else {
                            setCurrentDescription(resultCurrentDescription[1].substring(0, currentDescription.length + 1 ))
                            if(resultCurrentDescription[1]===currentDescription) setIsDeleteCurrentDescription(true)
                        }
                    }
                }
            }
        },200)
    })
    

    return (
        <section className="aboutMe" id="aboutMe">
            <div className="container-fluid">
                <div className="text">
                    <h1 className={`${resultName===currentName && 'finished'}`}>{currentName}</h1>
                    <p>{currentDescriptionPrefix} {currentDescription}</p>
                </div>
                <div className="image">
                    <img src={myImage} alt="" />
                </div>
            </div>
            <a href="#project" className="go-down">
                <FontAwesomeIcon icon={faAngleDoubleDown} size="2x" />
            </a>
        </section>
    )
}

export default AboutMe