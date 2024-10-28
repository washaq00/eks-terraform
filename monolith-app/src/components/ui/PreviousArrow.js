import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import '../../css/index.css'

const PreviousArrow = () => {
    return (
        <div className="left-icon">
            <FontAwesomeIcon icon={faChevronLeft} size="2x"/>
        </div>
    )
}

export default PreviousArrow